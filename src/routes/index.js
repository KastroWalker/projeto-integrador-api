import { Router } from 'express';
import ClientRoutes from './client.routes';
import MerchantRoutes from './merchant.routes';
import AddressRoutes from './address.routes';
import StoreRoutes from './store.routes';
import ProductRoutes from './product.routes';

const routes = new Router();

routes.use(ClientRoutes);
routes.use(MerchantRoutes);
routes.use(AddressRoutes);
routes.use(StoreRoutes);
routes.use(ProductRoutes);

export default routes;
