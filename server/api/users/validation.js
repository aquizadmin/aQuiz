import joiMiddleware from "../shared/validation/joiSchemaToMiddlewareAdapter.js";
import Joi from "joi";
import objectId from "joi-objectid";
Joi.objectId = objectId(Joi);

const UserByIdSchema = Joi.object({
    params: Joi.object({
        id: Joi.objectId().required(),
    }),
});

const UserByIdValidation = joiMiddleware(UserByIdSchema);

export {
    UserByIdValidation,
}
