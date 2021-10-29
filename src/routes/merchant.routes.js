import { Router } from 'express';
import MerchantController from '../controllers/MerchantController';

const routes = new Router();

routes.get('/merchants', MerchantController.getAll);
routes.get('/merchants/:id', MerchantController.getById);

routes.post('/merchants', MerchantController.create);

routes.put('/merchants/:id', MerchantController.update);

routes.delete('/merchants/:id', MerchantController.delete);

export default routes;
