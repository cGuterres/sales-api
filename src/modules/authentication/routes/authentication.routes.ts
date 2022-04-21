import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import AuthenticationController from '../controllers/AuthenticationController';

const authenticationRouter = Router();
const authenticationController = new AuthenticationController();

authenticationRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(10).required(),
    },
  }),
  authenticationController.authenticate,
);

export default authenticationRouter;
