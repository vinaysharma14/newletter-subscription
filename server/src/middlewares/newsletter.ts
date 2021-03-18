import { body } from "express-validator";

const subscribeParamsValidation = () => ([
  body('email').isEmail(),
  body('email').isLength({ min: 10, max: 30 }),
]);

export { subscribeParamsValidation };
