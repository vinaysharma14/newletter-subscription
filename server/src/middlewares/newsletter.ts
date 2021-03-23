import { body } from "express-validator";

const subscribeParamsValidation = () => ([
  body('age').isString(),
  body('email').isEmail(),
  body('age').isLength({ min: 2, max: 2 }),
  body('email').isLength({ min: 10, max: 30 }),
]);

export { subscribeParamsValidation };
