import { Router } from 'express';
import ClientController from './controllers/ClientController';
import MerchantController from './controllers/MerchantController';

const routes = new Router();

routes.get('/clients', ClientController.getAll);
routes.get('/clients/:id', ClientController.getById);
routes.post('/clients', ClientController.create);
routes.put('/clients/:id', ClientController.update);
routes.delete('/clients/:id', ClientController.delete);

routes.get('/merchants', MerchantController.getAll);
routes.get('/merchants/:id', MerchantController.getById);
routes.post('/merchants', MerchantController.create);
routes.put('/merchants/:id', MerchantController.update);
routes.delete('/merchants/:id', MerchantController.delete);

export default routes;
