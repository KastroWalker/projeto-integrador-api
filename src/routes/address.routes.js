import { Router } from 'express';
import AddressController from '../controllers/AddressController';

const routes = Router();

routes.post('/addresses', AddressController.create);

export default routes;
