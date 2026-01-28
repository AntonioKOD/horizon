import {NextRequest, NextResponse} from 'next/server';
import {Resend} from 'resend'
import EmailTemplate from '@/components/email-template';
import React from 'react';



const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { renderToStaticMarkup } = await import('react-dom/server');
    const body = await req.json()

    const {name, email, phone, service, message} = body

    if(!name || !email || !message) {
        return NextResponse.json("Name, email, and message are required", {status: 400})
    }

    const formData = {
        name,
        email,
        phone: phone || '',
        service: service || '',
        message,
        timestamp: new Date().toISOString(),
        source: 'contact-form'
    }

    // Send to n8n webhook (if configured)
    let n8nResponse = null;
    let n8nError = null;
    
    if (process.env.N8N_WEBHOOK_URL) {
        try {
            n8nResponse = await fetch(process.env.N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!n8nResponse.ok) {
                n8nError = `n8n webhook returned status ${n8nResponse.status}`;
            }
        } catch (error) {
            n8nError = error instanceof Error ? error.message : 'Unknown error sending to n8n';
            console.error('Error sending to n8n:', error);
        }
    }

    // Send email via Resend
    let emailData = null;
    let emailError = null;

    try {
        const {data, error} = await resend.emails.send({
            from: 'Horizon Fix <info@horizonfix.com>',
            to: 'antonio_kodheli@icloud.com',
            subject: 'New message from Horizon Fix contact form',
            html: renderToStaticMarkup(React.createElement(EmailTemplate, { name, email, phone, service, message }))
        })

        if(error){
            emailError = error;
        } else {
            emailData = data;
        }
    } catch(error) {
        emailError = error instanceof Error ? error.message : 'Unknown error sending email';
        console.error('Error sending email:', error);
    }

    // Return success if at least one method succeeded
    if (emailData || n8nResponse?.ok) {
        return NextResponse.json(
            {
                message: 'Form submitted successfully',
                email: emailData ? 'sent' : emailError,
                n8n: n8nResponse?.ok ? 'sent' : n8nError,
                data: emailData
            },
            {status: 200}
        )
    }

    // If both failed, return error
    return NextResponse.json(
        {
            message: 'Failed to submit form',
            errors: {
                email: emailError,
                n8n: n8nError
            }
        },
        {status: 500}
    )
}