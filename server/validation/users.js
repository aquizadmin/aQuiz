import joiMiddleware from "./joiToMidlewareWrapper.js";
import Joi from "joi";
import objectId from "joi-objectid";
Joi.objectId = objectId(Joi);

const UserByIdSchema = Joi.object({
  params: Joi.object({
    id: Joi.objectId().required(),
  }),
});

const AddCommentSchema = Joi.object({
  body: Joi.object({
    comment: Joi.string().min(5).max(500).required(),
  })
});

const GetAllCommentsSchema = Joi.object({
  params: Joi.object({
    page: Joi.number().required(),
    count: Joi.number().required(),
  })
})


const UserByIdValidation = joiMiddleware(UserByIdSchema);
const AddCommentValidation = joiMiddleware(AddCommentSchema);
const GetCommentsValidation = joiMiddleware(GetAllCommentsSchema);

export default {
  UserById: UserByIdValidation,
  AddComment: AddCommentValidation,
  GetComments: GetCommentsValidation,
};
