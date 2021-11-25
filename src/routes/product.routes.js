import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const routes = new Router();

routes.get('/products', ProductController.getAll);

export default routes;
