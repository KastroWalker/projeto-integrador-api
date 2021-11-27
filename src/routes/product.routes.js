import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const routes = new Router();

routes.get('/products', ProductController.getAll);
routes.get('/products/:storeId', ProductController.getByStore);

routes.post('/products', ProductController.create);
routes.delete('/products/:id', ProductController.delete);

export default routes;
