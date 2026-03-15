import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, company, message } = await request.json();

    if (!firstName || !lastName || !email || !company || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      return NextResponse.json(
        { error: 'Names must only contain letters and spaces' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Configure Nodemailer with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'devmadhan24@gmail.com',
        pass: process.env.EMAIL_PASS, // App Password required
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'devmadhan24@gmail.com',
      to: 'devmadhan24@gmail.com',
      replyTo: email,
      subject: `New Contact Request: ${firstName} ${lastName}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f4f5;
      -webkit-font-smoothing: antialiased;
    }
    table, td, p, h1, h2, h3, span, a, div {
      font-family: 'Bricolage Grotesque', system-ui, -apple-system, sans-serif !important;
    }
    .wrapper {
      width: 100%;
      table-layout: fixed;
      background-color: #f4f4f5;
      padding: 40px 20px;
    }
    .main {
      background-color: #09090b;
      color: #fafafa;
      margin: 0 auto;
      width: 100%;
      max-width: 600px;
      border-spacing: 0;
      font-family: 'Bricolage Grotesque', system-ui, -apple-system, sans-serif;
      border-radius: 16px;
      overflow: hidden;
      border: 2px solid #27272a;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    }
    .inner-padding {
      padding: 48px 40px;
    }
    .header {
      text-align: center;
      padding-bottom: 32px;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.03em;
    }
    .header p {
      margin: 8px 0 0 0;
      color: #a1a1aa;
      font-size: 15px;
    }
    .details-box {
      background-color: #18181b;
      padding: 24px;
      border-radius: 12px;
      border: 2px solid #27272a;
      margin-bottom: 24px;
    }
    .details-table {
      width: 100%;
      border-collapse: collapse;
    }
    .details-table td {
      padding: 14px 0;
      font-size: 15px;
    }
    .details-table tr:not(:last-child) td {
      border-bottom: 2px solid #27272a;
    }
    .label {
      color: #a1a1aa;
      width: 32%;
      font-weight: 400;
    }
    .value {
      color: #ffffff;
      font-weight: 600;
    }
    .value a {
      color: #60a5fa;
      text-decoration: none;
      transition: color 0.2s;
    }
    .message-box {
      background-color: #18181b;
      padding: 28px 24px;
      border-radius: 12px;
      border: 2px solid #27272a;
    }
    .message-title {
      display: block;
      color: #a1a1aa;
      margin-bottom: 16px;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 700;
    }
    .message-content {
      margin: 0;
      color: #e4e4e7;
      line-height: 1.7;
      font-size: 16px;
      white-space: pre-wrap;
      font-weight: 400;
    }
    .footer {
      text-align: center;
      padding-top: 32px;
      color: #52525b;
      font-size: 14px;
    }
    
    /* Mobile / Tablet Optimisations */
    @media screen and (max-width: 600px) {
      .wrapper { padding: 20px 10px; }
      .inner-padding { padding: 32px 24px; }
      .header h1 { font-size: 24px; }
      .details-box { padding: 20px; }
      .details-table td { font-size: 14px; padding: 12px 0; }
      .label { width: 38%; }
      .message-box { padding: 24px 20px; }
      .message-content { font-size: 15px; }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <table class="main">
      <tr>
        <td class="inner-padding">
          <div class="header">
            <h1>New Contact Request</h1>
            <p>via SEOSpeeder</p>
          </div>
          
          <div class="details-box">
            <table class="details-table">
              <tr>
                <td class="label">Name</td>
                <td class="value">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td class="label">Email</td>
                <td class="value"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td class="label">Company</td>
                <td class="value">${company}</td>
              </tr>
            </table>
          </div>
          
          <div class="message-box">
            <span class="message-title">Message</span>
            <p class="message-content">${message}</p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This email was automatically generated from the SEOSpeeder platform.</p>
          </div>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
