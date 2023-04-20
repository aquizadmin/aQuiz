import usersService from '../services/users.js';
import { SuccessResponseDTO } from "../DTO/index.js";

const getUserByID = async (req, res) => {
    const filter = {_id: req.params.id}
    const user = await usersService.getUser({filter});
    res.status(200).json(new SuccessResponseDTO(user));
}

export default {
    getUserByID,
}
