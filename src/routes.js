import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.createNewUser);

export default routes;
