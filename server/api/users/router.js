import authentication from "../shared/middleware/authentication.js";
import { UserByIdValidation } from "./validation.js";
import usersController from './controller.js';
import { Router } from "express";
const usersRouter = Router();

usersRouter.use(authentication.authenticate);
usersRouter.get('/:id', UserByIdValidation, usersController.getUserByID);
export default usersRouter;
