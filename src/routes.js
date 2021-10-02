import { Router } from 'express';
import UserController from './controller/UserController';

const routes = new Router();

routes.post('/user', UserController.createNewUser);

export default routes;
