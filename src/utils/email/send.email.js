import nodemailer from "nodemailer"
import { asyncHandler } from "../error/error.js"

export const sendEmail = asyncHandler(async ({ to = "", cc = "", bcc = "", subject = "Saraha App", text = "", html = "", attachments = [] } = {}) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const info = await transporter.sendMail({
        from: `"Saraha App👻" ${process.env.EMAIL}`, // sender address
        to,
        cc,
        bcc,
        subject,
        text,
        html,
        attachments,
    });
    return info
})