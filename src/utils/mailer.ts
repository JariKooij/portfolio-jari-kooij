"use server";
import nodemailer from "nodemailer";

export const send = async (subject: string, text: string) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST as string,
        port: parseInt(process.env.SMTP_PORT as string),
        secure: process.env.SMTP_ISSECURE === "true" ? true : false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    await transporter.sendMail({
        from: '"Contactform portfolio" <jarikooij.dev@gmail.com>',
        to: process.env.SMTP_ADMIN,
        subject,
        text,
    });
};
