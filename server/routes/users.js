import usersController from '../controllers/users.js';
import authentication from "../middlewares/authentication.js";
import { Router } from "express";
const usersRouter = Router();

usersRouter.get('/:id', authentication.authenticate,  usersController.getUserByID);
usersRouter.post('/create', usersController.createUser);
export default usersRouter;
