import usersModel from "../model/user.js";

const getUser = ({find, select} = {}) => {
    return usersModel.findOne(find).select(select);
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

export {
    getUser,
    createUser,
}
