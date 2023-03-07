import JWT from "../services/JWT.js";
import usersService from '../services/users.js';

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (token === null) {
        return res.sendStatus(401);
    }

    const userID = JWT.decodeAccessToken(token);
    if (userID) {
        usersService.getUserById({_id: userID})
            .then((user) => {
                req.user = user;
                next();
            })
            .catch((error) => {
                console.log(error);
                return res.sendStatus(500);
            })
    } else {
        return res.sendStatus(403)
    }
}

export default {
    authenticate,
}