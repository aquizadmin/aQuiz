import { JWT } from "../config/index.js";
import jwt from "jsonwebtoken";

/**
 * @description - Create JWT access token
 * @param payload {Object<id: string, rememberMe: Boolean>} - The payload in the token
 */
const generateAccessToken = (payload) => {
    const expiresIn = payload.rememberMe ? JWT.ACCESS_TOKEN.EXPIRED_IN_REMEMBER_ME : JWT.ACCESS_TOKEN.EXPIRED_IN_DEFAULT;
    return jwt.sign(payload, JWT.ACCESS_TOKEN.SECRET, { expiresIn });
}

/**
 * @description - Create JWT token for email confirmation
 * @param payload {Object<id: string>} - The payload in the token
 */
const generateEmailConfirmToken = (payload) => {
    return jwt.sign(payload, JWT.CONFIRM_EMAIL_TOKEN.SECRET);
}

/**
 * @description - Create JWT token for password reset process
 * @param payload {Object<id: string>} - The payload in the token
 */
const generatePasswordResetToken = (payload) => {
    const expiresIn = JWT.RESET_PASSWORD_TOKEN.EXPIRED_IN;
    return jwt.sign(payload, JWT.RESET_PASSWORD_TOKEN.SECRET, { expiresIn });
}

const decodeToken = (token, options = {}, secret) => {
    const result = {
        payload: null,
        error: null,
    }

    try {
        result.payload = jwt.verify(token, secret, options);
    } catch (error) {
        result.error = error;
    } finally {
        return result;
    }
}

const decodeAccessToken = (token, options = {}) => {
    return decodeToken(token, options, JWT.ACCESS_TOKEN.SECRET);
}

const decodeEmailConfirmToken = (token, options = {}) => {
    return decodeToken(token, options, JWT.CONFIRM_EMAIL_TOKEN.SECRET);
}

const decodePasswordResetToken = (token, options = {}) => {
    return decodeToken(token, options, JWT.RESET_PASSWORD_TOKEN.SECRET);
}

export default {
    generateAccessToken,
    generateEmailConfirmToken,
    generatePasswordResetToken,
    decodeAccessToken,
    decodeEmailConfirmToken,
    decodePasswordResetToken,
}
