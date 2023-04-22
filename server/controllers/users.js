import usersService from "../services/users.js";
import { SuccessResponseDTO } from "../DTO/index.js";

const getUserByID = async (req, res) => {
  const filter = { _id: req.params.id };
  const user = await usersService.getUser({ filter });
  res.status(200).json(new SuccessResponseDTO(user));
};

const getUsersStatistic = async (req, res) => {
  const page = Number(req.params.page) - 1;
  const count = Number(req.params.count);

  const usersCount = await usersService.getUsersCount();
  const pagesCount = Math.ceil(usersCount / page);
  const users = await usersService.getUsers({
    filter: {},
    select: { firstName: 1, lastName: 1, rating: 1 },
    skip: count * page,
    limit: count,
    sort: { rating: -1 },
  });

  res.status(200).json(new SuccessResponseDTO({ users, usersCount, pagesCount }));
};

// boandakutyun

// neracutyun
// node as backend, express, validation, jwt auth, mvc, mongodb
//

const me = async (req, res) => {
  return res.json(new SuccessResponseDTO(req.user));
};

export default {
  getUserByID,
  getUsersStatistic,
  me,
};
