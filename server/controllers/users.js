import usersService from '../services/users.js';

const getUserByID = async (req, res) => {
    const find = {_id: req.params.id}
    const user = await usersService.getUser({find});
    res.json(user);
}

export default {
    getUserByID,
}
