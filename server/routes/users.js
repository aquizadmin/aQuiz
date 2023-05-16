import authentication from "../middlewares/authentication.js";
import userValidation from "../validation/users.js";
import usersController from "../controllers/users.js";

import { Router } from "express";
const usersRouter = Router();

usersRouter.use(authentication.authenticate);
usersRouter.get("/me", userValidation.UserById, usersController.me);
usersRouter.get("/:id", userValidation.UserById, usersController.getUserByID);
usersRouter.get("/statistic/:page/:count", usersController.getUsersStatistic);
usersRouter.put("/comment", userValidation.AddComment, usersController.addComment);
usersRouter.get("/comment/:page/:count", userValidation.GetComments, usersController.getComments);

export default usersRouter;
