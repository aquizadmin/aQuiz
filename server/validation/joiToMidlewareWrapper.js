import { ErrorResponseDTO } from "../DTO/index.js";

const joiMiddleware = (schema) => {
  return async (req, res, next) => {
    try {
      const payload = {};
      if (Object.keys(req.params).length) payload.params = req.params;
      if (Object.keys(req.query).length) payload.query = req.query;
      if (Object.keys(req.body).length) payload.body = req.body;

      await schema.validateAsync(payload);
      next();
    } catch (e) {
      console.dir(e, {depth: null});
      const invalidKey = e.details[0].context.key;
      res.json(new ErrorResponseDTO(`${invalidKey} is not valid`));
    }
  };
};

export default joiMiddleware;
