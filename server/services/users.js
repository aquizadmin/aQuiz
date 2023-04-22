import usersModel from "../database/models/users.js";

const getUser = ({ filter, select } = {}) => {
  return usersModel.findOne(filter).select(select);
};

const getUsers = ({ filter, select, skip, limit, sort } = {}) => {
  return usersModel.find(filter).select(select).skip(skip).limit(limit).sort(sort);
};

const createUser = ({ firstName, lastName, email, password }) => {
  return usersModel.create({
    firstName,
    lastName,
    email,
    password,
    rating: 0,
    confirmed: false,
    lastPasswordReset: new Date(0),
  });
};

const updateUser = ({ filter, update }) => {
  return usersModel.findOneAndUpdate(filter, update);
};

const getUsersCount = () => {
  return usersModel.count();
};

export default {
  getUser,
  getUsers,
  createUser,
  updateUser,
  getUsersCount,
};
