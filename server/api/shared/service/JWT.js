import { JWT } from "../../../config/index.js";
import jwt from "jsonwebtoken";

/**
 * @description - Create JWT access token
 * @param payload {Object<id: string, rememberMe: Boolean>} - The payload in the token
 */
const generateAccessToken = (payload) => {
    const expiresIn = payload.rememberMe ? JWT.ACCESS_TOKEN.EXPIRED_IN_REMEMBER_ME : JWT.ACCESS_TOKEN.EXPIRED_IN_DEFAULT;
    return jwt.sign(payload, JWT.ACCESS_TOKEN.SECRET, { expiresIn });
}

const decodeAccessToken = (token, options = {}) => {
    const result = {
        payload: null,
        error: null,
    }

    try {
        result.payload = jwt.verify(token, JWT.ACCESS_TOKEN.SECRET, options);
    } catch (error) {
        result.error = error;
    } finally {
        return result;
    }
}

export default {
    generateAccessToken,
    decodeAccessToken,
}
