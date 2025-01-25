import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, phone, email, comments } = body;

    if (!name || !phone || !email || !comments) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: process.env.BREVO_EMAIL, // Uses the Brevo sender email from .env
        pass: process.env.BREVO_API_KEY, // Brevo API Key from .env
      },
    });

    const mailOptions = {
      from: `"Website Contact" <${process.env.BREVO_EMAIL}>`, // Uses Brevo email from .env
      to: process.env.RECIPIENT_EMAIL, // Recipient email from .env
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission:
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Comments: ${comments}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact route:", error.message);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
