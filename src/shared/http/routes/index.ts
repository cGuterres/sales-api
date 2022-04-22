import authenticationRouter from '@modules/authentication/routes/authentication.routes';
import productsRouter from '@modules/products/routes/product.routes';
import passwordRouter from '@modules/users/routes/password.routes';
import usersRouter from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/api/product', productsRouter);
routes.use('/api/user', usersRouter);
routes.use('/api/authenticate', authenticationRouter);
routes.use('/api/password', passwordRouter);

export default routes;
