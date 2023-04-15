import authentication from "../middlewares/authentication.js";
import questionsController from "../controllers/questions.js";

import { Router } from "express";
const questionsRouter = Router();

questionsRouter.use(authentication.authenticate);
questionsRouter.get("/getAllCategories", questionsController.getAllCategories);

export default questionsRouter;
