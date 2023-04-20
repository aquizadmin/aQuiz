import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from "node:crypto";
import ejs from "ejs";

import { APP } from "../config/index.js";
import JWT from "../services/JWT.js";
import usersService from "../services/users.js";
import mailerService from "../services/mailer.js"
import { SuccessResponseDTO, ErrorResponseDTO } from "../DTO/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const generateMD5 = (payload) => {
    return createHash('md5').update(payload).digest('hex')
}

const doesUserExists = async (email) => {
    const filter = {email};
    const select = {_id: 1};
    const user = await usersService.getUser({filter, select});
    return Boolean(user);
}

const login = async (req, res) => {
    const md5Password = generateMD5(req.body.password);
    const filter = {
        email: req.body.email,
        password: md5Password,
    };
    const select = {_id: 1};
    const user = await usersService.getUser({filter, select});
    if (!user) return res.status(401).json(new ErrorResponseDTO("There aren't any user with same data"));

    const accessToken = JWT.generateAccessToken({
        id: user._id,
        rememberMe: req.body.rememberMe,
    });
    return res.status(200).json(new SuccessResponseDTO(accessToken));
}

const registration = async (req, res) => {
    const userExists = await doesUserExists(req.body.email);
    if (userExists) return res.status(409).json(new ErrorResponseDTO("User with this email was already registered"));

    // create new user
    const md5Password = generateMD5(req.body.password);
    const newUserData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: md5Password,
    };
    const newUser = await usersService.createUser(newUserData);
    res.status(200).json(new SuccessResponseDTO());

    // send confirmation email
    const accountConfirmationUrlToken = JWT.generateEmailConfirmToken( {_id: newUser._id});
    const accountConfirmationUrl = `${APP.PROTOCOL}://${APP.HOST}:${APP.PORT}/confirmEmail/${accountConfirmationUrlToken}`;
    const templateData = { redirectUrl: accountConfirmationUrl };
    const templateUrl = `${__dirname}/../mailTemplates/confirmRegister.ejs`;
    ejs.renderFile(templateUrl, templateData, async (error, data) => {
        if (!error) mailerService.send({ to: newUserData.email, subject: "Welcome to aQuiz!!!", html: data });
    })
}

const confirmEmail = async (req, res) => {
    const token = req.body.token;
    const tokenPayload = JWT.decodeEmailConfirmToken(token);
    if (tokenPayload.error) return res.status(401).json(new ErrorResponseDTO("Invalid token"));

    const filter = { _id : tokenPayload.payload._id };
    const user = await usersService.getUser({filter})
    if (!user) return res.status(409).json(new ErrorResponseDTO("Invalid user"));

    const update = { confirmed: true };
    await usersService.updateUser({filter, update});

    res.status(200).json(new SuccessResponseDTO());
}

const resetPasswordMail = async (req, res) => {
    res.status(200).json(new SuccessResponseDTO());

    // send password reset email
    const passwordResetUrlToken = JWT.generatePasswordResetToken( {email: req.body.email});
    const passwordResetUrl = `${APP.PROTOCOL}://${APP.HOST}:${APP.PORT}/resetPassword/${passwordResetUrlToken}`;
    const templateData = { redirectUrl: passwordResetUrl };
    const templateUrl = `${__dirname}/../mailTemplates/resetPassword.ejs`;
    ejs.renderFile(templateUrl, templateData, async (error, data) => {
        if (!error) mailerService.send({ to: req.body.email, subject: "Hurry up, we don't have much time!", html: data });
    })
}

const canResetPassword = async (req, res) => {
    const token = req.body.token;
    const tokenPayload = JWT.decodePasswordResetToken(token);
    const tokenPayloadWithoutExpiration = JWT.decodePasswordResetToken(token, {ignoreExpiration: true});
    if (tokenPayload.error && tokenPayloadWithoutExpiration.error) return res.status(401).json(new ErrorResponseDTO("Invalid token"));
    if (tokenPayload.error && tokenPayloadWithoutExpiration.payload) return res.status(401).json(new ErrorResponseDTO("Expired token"));
    return res.status(200).json(new SuccessResponseDTO());
}

const resetPassword = async (req, res) => {
    const token = req.body.token;
    const tokenPayload = JWT.decodePasswordResetToken(token);
    const filter = {
        email: tokenPayload.payload.email,
    }
    const update = {
        password: generateMD5(req.body.password),
    }
    await usersService.updateUser({filter, update});
    return res.status(200).json(new SuccessResponseDTO());
}

export default {
    login,
    registration,
    confirmEmail,
    resetPasswordMail,
    canResetPassword,
    resetPassword,
}