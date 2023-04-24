import authentication from "../middlewares/authentication.js";
import userValidation from "../validation/users.js";
import usersController from "../controllers/users.js";

import { Router } from "express";
const usersRouter = Router();

usersRouter.use(authentication.authenticate);
usersRouter.get("/me", userValidation.UserByIdValidation, usersController.me);
usersRouter.get("/:id", userValidation.UserByIdValidation, usersController.getUserByID);
usersRouter.get("/statistic/:page/:count", usersController.getUsersStatistic);

export default usersRouter;
