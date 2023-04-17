import authentication from "../middlewares/authentication.js";
import userValidation from "../validation/users.js";
import usersController from '../controllers/users.js';

import { Router } from "express";
const usersRouter = Router();

usersRouter.use(authentication.authenticate)
usersRouter.get('/:id', userValidation.UserByIdValidation, usersController.getUserByID);

export default usersRouter;
