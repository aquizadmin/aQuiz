import authentication from "../middlewares/authentication.js";
import questionsValidation from "../validation/questions.js";
import questionsController from "../controllers/questions.js";

import { Router } from "express";
const questionsRouter = Router();

questionsRouter.use(authentication.authenticate);
questionsRouter.get("/:id", questionsValidation.QuestionByIdValidation, questionsController.getQuestionById);
questionsRouter.put("/", questionsValidation.CreateQuestionValidation, questionsController.createQuestion);

export default questionsRouter;
