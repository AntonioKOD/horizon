import type * as React from "react"
import { Body, Container, Head, Heading, Hr, Html, Link, Preview, Section, Text } from "@react-email/components"

export interface EmailTemplateProps {
  name: string
  email: string
  phone?: string
  service?: string
  message: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, phone, service, message }) => (
  <Html>
    <Head />
    <Preview>New message from {name} via Horizon Fix contact form</Preview>
    <Body style={bodyStyle}>
      <Container style={containerStyle}>
        <Section style={headerStyle}>
          <Heading style={headingStyle}>Horizon Fix</Heading>
          <Text style={subheadingStyle}>New Contact Form Submission</Text>
        </Section>

        <Hr style={hrStyle} />

        <Section style={contentStyle}>
          <Heading as="h2" style={sectionHeadingStyle}>
            Contact Information
          </Heading>
          <Text style={labelStyle}>Name:</Text>
          <Text style={valueStyle}>{name}</Text>

          <Text style={labelStyle}>Email:</Text>
          <Text style={valueStyle}>
            <Link href={`mailto:${email}`} style={linkStyle}>
              {email}
            </Link>
          </Text>

          {phone && (
            <>
              <Text style={labelStyle}>Phone:</Text>
              <Text style={valueStyle}>{phone}</Text>
            </>
          )}

          {service && (
            <>
              <Text style={labelStyle}>Service Interested In:</Text>
              <Text style={valueStyle}>{service}</Text>
            </>
          )}

          <Heading as="h2" style={sectionHeadingStyle}>
            Message
          </Heading>
          <Text style={messageStyle}>{message}</Text>
        </Section>

        <Hr style={hrStyle} />

        <Section style={footerStyle}>
          <Text style={footerTextStyle}>This message was sent via the Horizon Fix contact form.</Text>
          <Text style={footerTextStyle}>
            <Link href="https://horizonfix.com" style={footerLinkStyle}>
              Visit our website
            </Link>{" "}
            |{" "}
            <Link href="https://horizonfix.com/contact" style={footerLinkStyle}>
              Contact us
            </Link>
          </Text>
          <Text style={copyrightStyle}>© {new Date().getFullYear()} Horizon Fix. All rights reserved.</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

// Styles
const bodyStyle = {
  backgroundColor: "#f5f5f5",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  margin: 0,
  padding: 0,
}

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  padding: "20px 0",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  maxWidth: "600px",
}

const headerStyle = {
  backgroundColor: "#FF7A00", // Primary color
  color: "#ffffff",
  padding: "30px 20px",
  textAlign: "center" as const,
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
}

const headingStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0 0 10px",
  color: "#ffffff",
}

const subheadingStyle = {
  fontSize: "16px",
  fontWeight: "normal",
  margin: "0",
  color: "#ffffff",
}

const hrStyle = {
  borderColor: "#e6e6e6",
  margin: "20px 0",
}

const contentStyle = {
  padding: "0 30px",
}

const sectionHeadingStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#333333",
  margin: "25px 0 15px",
}

const labelStyle = {
  fontSize: "14px",
  color: "#666666",
  margin: "10px 0 5px",
}

const valueStyle = {
  fontSize: "16px",
  color: "#333333",
  margin: "0 0 15px",
}

const messageStyle = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#333333",
  backgroundColor: "#f9f9f9",
  padding: "15px",
  borderRadius: "4px",
  borderLeft: "4px solid #FF7A00",
  margin: "10px 0 20px",
}

const linkStyle = {
  color: "#FF7A00",
  textDecoration: "none",
}

const footerStyle = {
  textAlign: "center" as const,
  padding: "0 30px 20px",
  color: "#666666",
}

const footerTextStyle = {
  fontSize: "14px",
  color: "#666666",
  margin: "5px 0",
}

const footerLinkStyle = {
  color: "#FF7A00",
  textDecoration: "none",
}

const copyrightStyle = {
  fontSize: "12px",
  color: "#999999",
  margin: "15px 0 0",
}

export default EmailTemplate

