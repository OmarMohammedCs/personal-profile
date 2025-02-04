import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();


  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }


  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ message: "Email address is invalid" }, { status: 400 });
  }

  try {
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

   
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER2, 
      subject: subject,
      text: message,
      html: `<p><strong>name:</strong> ${name}</p>
             <p><strong>email:</strong> ${email}</p>
             <p><strong>subject:</strong> ${subject}</p>
             <p><strong>message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error while sending mail: ", error);
    return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
  }
}
