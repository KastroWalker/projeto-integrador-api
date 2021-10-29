import { Router } from 'express';
import ClientController from '../controllers/ClientController';

const routes = new Router();

routes.get('/clients', ClientController.getAll);
routes.get('/clients/:id', ClientController.getById);

routes.post('/clients', ClientController.create);

routes.put('/clients/:id', ClientController.update);

routes.delete('/clients/:id', ClientController.delete);

export default routes;
