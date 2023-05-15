import joiMiddleware from "./joiToMidlewareWrapper.js";
import Joi from "joi";
import objectId from "joi-objectid";
Joi.objectId = objectId(Joi);

const UserByIdSchema = Joi.object({
  params: Joi.object({
    id: Joi.objectId().required(),
  }),
});

const SendCommentSchema = Joi.object({
  body: Joi.object({
    message: Joi.string().min(5).max(500).required(),
  })
})

const UserByIdValidation = joiMiddleware(UserByIdSchema);
const SendCommentValidation = joiMiddleware(SendCommentSchema);

export default {
  UserById: UserByIdValidation,
  SendComment: SendCommentValidation,
};
