import { Router } from 'express';
import StoreController from '../controllers/StoreController';

const routes = new Router();

routes.get('/stores/:id', StoreController.getById);
routes.post('/stores', StoreController.create);

export default routes;
