import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  const { name, email, occupation, service, message } = body;

  try {
    // 1. Send to Admin
    const adminEmail = await resend.emails.send({
      from: 'FlyingDarkDev <noreply@flyingdarkdev.in>',
      to: ['darkgauravyadav@gmail.com'],
      subject: '📩 New Contact Submission',
      html: `
        <h2>You've received a new message!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Occupation:</strong> ${occupation}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    // 2. Send Confirmation to Client
    const clientEmail = await resend.emails.send({
      from: 'FlyingDarkDev 🚀 <noreply@flyingdarkdev.in>',
      to: [email],
      subject: 'Welcome to FlyingDarkDev!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9;">
          <div style="max-width: 600px; margin: auto; background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.1);">
            <img src="https://raw.githubusercontent.com/notifyworld/logos/refs/heads/main/logo.png" alt="FlyingDarkDev Logo" style="height: 60px; margin-bottom: 20px;" />
            <h2 style="color: #333;">Hey ${name} 👋</h2>
            <p style="font-size: 16px; color: #555;">
              Thank you for reaching out to us at <strong>FlyingDarkDev</strong>. We’ve received your request and one of our team members will be in touch soon!
            </p>
            <p style="font-size: 16px; color: #555;">
              In the meantime, feel free to explore more about our services and see how we turn imagination into reality.
            </p>
            <blockquote style="margin: 20px 0; padding: 15px; background: #f1f1f1; border-left: 5px solid #6366f1;">
              “Every great project begins with a great conversation — let's build something awesome together.”
            </blockquote>
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://flyingdarkdev.in" style="background-color: #6366f1; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Visit Our Website
              </a>
            </div>
            <p style="margin-top: 40px; font-size: 14px; color: #aaa; text-align: center;">
              🚀 FlyingDarkDev – Building the Future, Digitally.
            </p>
          </div>
        </div>
      `,
    });

    return new NextResponse(JSON.stringify({ success: true, adminEmail, clientEmail }), {
      status: 200,
    });

  } catch (error) {
    return new NextResponse(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
