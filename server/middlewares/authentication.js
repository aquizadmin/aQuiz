import JWT from "../services/JWT.js";
import usersService from '../services/users.js';

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (token === null) {
        return res.sendStatus(401);
    }

    const userID = JWT.decodeAccessToken(token);
    if (!userID) return res.sendStatus(403);
    const find = {_id: userID};
    const user = await usersService.getUser(find);
    if (!user) return res.sendStatus(500);
    req.user = user;
    next();
}

export default {
    authenticate,
}