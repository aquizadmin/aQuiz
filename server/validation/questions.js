import joiMiddleware from "./joiToMidlewareWrapper.js";
import Joi from "joi";
import objectId from "joi-objectid";
Joi.objectId = objectId(Joi);

const QuestionByIdSchema = Joi.object({
    params: Joi.object({
        id: Joi.objectId().required(),
    }),
});

const CreateQuestionSchema = Joi.object({
    body: Joi.object({
        question: Joi.string().required(),
        answers: Joi.array().items(Joi.string().required()).length(4).required(),
        correct_answer: Joi.number().min(0).max(3).required(),
        tags: Joi.array().items(Joi.string().required()).required(),
        category: Joi.string().required(),
        difficulty: Joi.string().required(),
    })
});

const QuestionByIdValidation = joiMiddleware(QuestionByIdSchema);
const CreateQuestionValidation = joiMiddleware(CreateQuestionSchema);

export default {
    QuestionByIdValidation,
    CreateQuestionValidation,
};
