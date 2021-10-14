import express from 'express';
import cors from 'cors';
import routes from './routes';
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
      return res.status(error.statusCode).send('Middleware');
    });
  }
}

export default new App().server;
