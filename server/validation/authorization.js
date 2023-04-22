import joiMiddleware from "./joiToMidlewareWrapper.js";
import Joi from "joi";

const loginSchema = Joi.object({
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

const registrationSchema = Joi.object({
  body: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

const loginValidation = joiMiddleware(loginSchema);
const registrationValidation = joiMiddleware(registrationSchema);

export default {
  loginValidation,
  registrationValidation,
};
