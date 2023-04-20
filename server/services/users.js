import usersModel from '../database/models/users.js';

const getUser = ({filter, select} = {}) => {
    return usersModel.findOne(filter).select(select);
}

const createUser = ({firstName, lastName, email, password}) => {
    return usersModel.create({
        firstName,
        lastName,
        email,
        password,
        rating: 0,
        confirmed: false,
        lastPasswordReset: new Date(0),
    });
}

const updateUser = ({filter, update}) => {
    return usersModel.findOneAndUpdate(filter, update);
}

export default {
    getUser,
    createUser,
    updateUser,
}