import { Router } from 'express';
import TypeUserController from './controllers/TypeUserController';
import UserController from './controllers/UserController';

const routes = new Router();

routes.post('/users/:type_id/type', UserController.createNewUser);
routes.post('/users/type', TypeUserController.create);

export default routes;
