import { JWT } from "../config/index.js";
import jwt from "jsonwebtoken";

/**
 * @description = Create JWT token
 * @param payload {*} - The payload in the token
 * @param rememberMe {Boolean} - If true, the token is valid for a week, otherwise an hour
 */
const generateAccessToken = (payload, rememberMe) => {
    const expiresIn = rememberMe ? JWT.EXPIRED_IN_REMEMBER_ME : JWT.EXPIRED_IN_DEFAULT;
    return jwt.sign(payload, JWT.SECRET, { expiresIn });
}

const decodeAccessToken = (token) => {
    try {
        return jwt.verify(token, JWT.SECRET);
    } catch (e) {
        console.log(e);
        return null;
    }
}


export default {
    generateAccessToken,
    decodeAccessToken,
}
