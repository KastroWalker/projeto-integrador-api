import { Router } from 'express';
import StoreController from '../controllers/StoreController';

const routes = new Router();

routes.get('/stores/:id', StoreController.getById);
routes.get('/stores', StoreController.getAll);

routes.post('/stores', StoreController.create);

routes.put('/stores/:id', StoreController.update);

routes.delete('/stores/:id', StoreController.delete);

export default routes;
