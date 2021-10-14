import express from 'express';
import cors from 'cors';
import routes from './routes';
import { handleError } from './helpers/ErrorHandler';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
    this.errorMiddleware();
  }

  middleware() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }

  errorMiddleware() {
    this.server.use((error, req, res, next) => {
      handleError(error, res);
    });
  }
}

export default new App().server;
