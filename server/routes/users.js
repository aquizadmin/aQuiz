import usersController from '../controllers/users.js';
import { Router } from "express";
const usersRouter = Router();

usersRouter.get('/:id', usersController.getUserByID);
usersRouter.post('/create', usersController.createUser);
export default usersRouter
