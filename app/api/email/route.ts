import { NextRequest, NextResponse } from 'next/server';
require('dotenv').config()

const PASSWORD = process.env.EMAIL_PASSWORD
const USER = process.env.EMAIL_USER

export async function POST(req: NextRequest){

    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.zoho.eu",
        auth: {
            user: USER,
            pass: PASSWORD 
        },
        secure: true
    });

    try {
        const body = await req.json();
        if (!body || !body.name || !body.email || !body.message) {
            return NextResponse.json({error: 'Name, message and email are required'}, {status: 400});
        };
        const mailData = {
            from: USER,
            to: 'fxliu666@gmail.com',
            subject: `Message from ${body.name} via fangxingliu.com`,
            text: `Email: ${body.email}\nMessage: ${body.message}`,
            html: `<p>Email: ${body.email}<br>Message: ${body.message}</p>`
        };
        const info = await transporter.sendMail(mailData);
        return NextResponse.json({message: 'Email sent successfully'}, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'Internal server error when sending email'}, {status: 500})
    }
}