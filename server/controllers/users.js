import usersService from '../services/users.js';

const getUserByID = async (req, res) => {
    const user = await usersService.getUserById({_id: userID});
    res.json(user);
}

const createUser = (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const newUser = usersService.createUser({firstName, lastName, email, password});
    res.json(newUser);
}

export default {
    getUserByID,
    createUser
}
