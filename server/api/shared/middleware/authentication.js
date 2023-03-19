import JWTService from "../service/JWT.js";
import { JWT } from '../../../config/index.js';
import { getUser } from '../service/user.js';

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (token === null) {
        return res.sendStatus(401);
    }

    const decodedToken = JWTService.decodeAccessToken(token);
    const expirationIgnoredDecodedToken = JWTService.decodeAccessToken(token, {ignoreExpiration: true});
    if (decodedToken.error && expirationIgnoredDecodedToken.error) {
        return res.sendStatus(403);
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
            return res.sendStatus(403);
        }
    }

    const userID = expirationIgnoredDecodedToken.payload.id;
    const find = {_id: userID};
    const user = await getUser(find);
    if (!user) return res.sendStatus(500);
    req.user = user;
    next();
}

export default {
    authenticate,
}
