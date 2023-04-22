`use strict`;
import nodemailer from "nodemailer";
import { MAILER } from "../config/index.js";

const transporter = nodemailer.createTransport({
  host: MAILER.HOST,
  port: MAILER.PORT,
  secure: MAILER.PORT,
  auth: {
    user: MAILER.SENDER.EMAIL,
    pass: MAILER.SENDER.PASSWORD,
  },
});

const send = ({ to, subject, html }) => {
  return transporter.sendMail({
    from: MAILER.SENDER.EMAIL,
    to: to,
    subject: subject,
    html: html,
  });
};

export default {
  send,
};
