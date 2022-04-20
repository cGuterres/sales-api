import productsRouter from '@modules/products/routes/product.routes';
import usersRouter from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/api/product', productsRouter);
routes.use('/api/user', usersRouter);

export default routes;
