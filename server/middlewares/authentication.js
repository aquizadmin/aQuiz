import JWTService from "../services/JWT.js";
import { JWT } from '../config/index.js';
import usersService from '../services/users.js';
import { SuccessResponseDTO, ErrorResponseDTO } from "../DTO/index.js";

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json(new ErrorResponseDTO("Axr erexeq jan token@ ura?"));
    }

    const decodedToken = JWTService.decodeAccessToken(token);
    const expirationIgnoredDecodedToken = JWTService.decodeAccessToken(token, {ignoreExpiration: true});
    if (decodedToken.error && expirationIgnoredDecodedToken.error) {
        return res.status(403).json(new ErrorResponseDTO("Invalid token"));
    } else if (decodedToken.error && decodedToken.error.name === "TokenExpiredError" && expirationIgnoredDecodedToken.payload) {
        const tokenExpiredAt = decodedToken.error.expiredAt;
        const canBeRefreshed = tokenExpiredAt.getTime() + JWT.ACCESS_TOKEN.REFRESHING_PERIOD > Date.now();
        if (canBeRefreshed) {
            const newAccessTokenPayload = {
                id: expirationIgnoredDecodedToken.payload.id,
                rememberMe: expirationIgnoredDecodedToken.payload.rememberMe || 7,
            };
            const newAccessToken = canBeRefreshed ? JWTService.generateAccessToken(newAccessTokenPayload) : null;
            res.setHeader("authorization", `Bearer ${newAccessToken}`);
        } else {
            return res.status(401).json(new ErrorResponseDTO("Invalid token"));
        }
    }

    const userID = expirationIgnoredDecodedToken.payload.id;
    const find = {_id: userID};
    const user = await usersService.getUser(find);
    if (!user) return res.status(500).json(new ErrorResponseDTO("Server side issue. Case#1."));
    req.user = user;
    next();
}

export default {
    authenticate,
}
