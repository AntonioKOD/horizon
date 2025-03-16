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

    try{
        const {data, error} = await resend.emails.send({
            from: 'Horizon Fix <info@horizonfix.com>',
            to: 'antonio_kodheli@icloud.com',
            subject: 'New message from Horizon Fix contact form',
            html: renderToStaticMarkup(React.createElement(EmailTemplate, { name, email, phone, service, message }))
        })

        if(error){
            return NextResponse.json(error, {status: 500})
        }

        return NextResponse.json(
            {message: 'Email sent successfully', data},
            {status: 200}
        )

    }catch(error){
        return NextResponse.json(error, {status: 500})
    }


}