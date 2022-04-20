import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UserController from '../controllers/UserController';

const usersRouter = Router();
const userController = new UserController();

usersRouter.get('/', userController.getAll);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().max(100).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(10).required(),
    },
  }),
  userController.create,
);

export default usersRouter;
