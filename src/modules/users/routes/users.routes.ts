import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UserController from '../controllers/UserController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import multer from 'multer';
import uploadConfig from '@config/upload';
import UserAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();
const userController = new UserController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig);

usersRouter.get('/', isAuthenticated, userController.getAll);

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

usersRouter.patch(
  '/avatar',
  isAuthenticated,
  upload.single('avatarFileName'),
  userAvatarController.update,
);

export default usersRouter;
