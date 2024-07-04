// app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer, { Transporter, SendMailOptions } from "nodemailer";

export interface MailOptions extends SendMailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body: MailOptions = await req.json();

  // Create a transporter object using the default SMTP transport
  const transporter: Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USERNAME, // your gmail account
      pass: process.env.SMTP_PASSWORD, // your gmail password
    },
  });

  try {
    // Send mail with defined transport object
    await transporter.sendMail(body);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
