import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productsRouter = Router();
const productController = new ProductController();

productsRouter.get('/', productController.getAll);
productsRouter.get('/:id', productController.getProductDetail);
productsRouter.post('/', productController.create);
productsRouter.put('/:id', productController.update);
productsRouter.delete('/:id', productController.delete);

export default productsRouter;
