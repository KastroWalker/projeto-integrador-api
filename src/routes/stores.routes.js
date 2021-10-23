import { Router } from 'express';
import StoreController from '../controllers/StoreController';

const routes = new Router();

routes.post('/stores', StoreController.insert);

export default routes;
