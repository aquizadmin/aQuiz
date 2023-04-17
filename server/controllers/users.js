import usersService from '../services/users.js';
import { SuccessResponseDTO } from "../DTO/index.js";

const getUserByID = async (req, res) => {
    const find = {_id: req.params.id}
    const user = await usersService.getUser({find});
    res.status(200).json(new SuccessResponseDTO(user));
}

export default {
    getUserByID,
}
