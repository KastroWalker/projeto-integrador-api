import { Router } from 'express';
import StoreController from '../controllers/StoreController';
import verifyToken from '../middleware/auth';

const routes = new Router();

routes.get('/stores/:id', StoreController.getById);
routes.get('/stores', StoreController.getAll);

routes.post('/stores', verifyToken, StoreController.create);

routes.put('/stores/:id', StoreController.update);

routes.delete('/stores/:id', StoreController.delete);

export default routes;
