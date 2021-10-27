import { Router } from 'express';
import ClientRoutes from './client.routes';
import MerchantRoutes from './merchant.routes';
import AddressRoutes from './address.routes';

const routes = new Router();

routes.use(ClientRoutes);
routes.use(MerchantRoutes);
routes.use(AddressRoutes);

export default routes;
