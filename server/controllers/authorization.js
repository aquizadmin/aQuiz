import { createHash } from "node:crypto";
import JWT from "../services/JWT.js";
import usersService from "../services/users.js";
import { SuccessResponseDTO, ErrorResponseDTO } from "../DTO/index.js";

const generateMD5Password = (password) => {
    return createHash('md5').update(password).digest('hex')
}

const doesUserExists = async (email) => {
    const find = {email};
    const select = {_id: 1};
    const user = await usersService.getUser({find, select});
    return Boolean(user);
}

const login = async (req, res) => {
    const md5Password = generateMD5Password(req.body.password);
    const find = {
        email: req.body.email,
        password: md5Password,
    };
    const select = {_id: 1};
    const user = await usersService.getUser({find, select});
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
    const md5Password = generateMD5Password(req.body.password);
    const newUserData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: md5Password,
    };
    const newUser = await usersService.createUser(newUserData);
    const accessToken = JWT.generateAccessToken({
        id: newUser._id,
        rememberMe: true,
    });
    return res.status(200).json(new SuccessResponseDTO(accessToken));
}

export default {
    login,
    registration,
}