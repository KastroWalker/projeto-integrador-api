import { Router } from 'express';
import ClientsRoutes from './clients.routes';
import StoresRoutes from './stores.routes';
import MerchantsRoutes from './merchants.routes';

const routes = new Router();

routes.use(ClientsRoutes);
routes.use(StoresRoutes);
routes.use(MerchantsRoutes);

export default routes;
