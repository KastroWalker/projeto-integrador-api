import { Router } from 'express';
import AddressController from '../controllers/AddressController';

const routes = Router();

routes.get('/addresses', AddressController.getAll);
routes.post('/addresses', AddressController.create);
routes.put('/addresses/:id', AddressController.update);
routes.delete('/addresses/:id', AddressController.delete);

export default routes;
