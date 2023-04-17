`use strict`
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
        user: "aquiz_mail@mail.ru",
        pass: "9zMqJ&prnbQb^J+J",
    },
});

const sendEmail = async ({to, subject, text, html}) => {
    let info = await transporter.sendMail({
        from: 'aquiz_mail@mail.ru',
        to: to,
        subject: subject,
        text: text,
        html: html,
    });
}

export default sendEmail;