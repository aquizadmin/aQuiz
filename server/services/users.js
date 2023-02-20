import usersModel from '../database/models/users.js';

const getUserById = ({_id}) => {
    return usersModel.findOne({_id});
}

const createUser = ({firstName, lastName, email, password}) => {
    return usersModel.create({
        firstName,
        lastName,
        email,
        password,
        rating: 0,
    });
}

export default {
    getUserById,
    createUser,
}