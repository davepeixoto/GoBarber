import 'dotenv/config'; // this action put all off global variable on node inside process.env
import express from 'express';
import path from 'path';
import cors from 'cors';
import * as Sentry from '@sentry/node';
import Youch from 'youch';
import sentryConfig from './config/sentry';
import 'express-async-errors';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();
    Sentry.init(sentryConfig);
    this.middleware();
    this.routes();
    this.exceptionHandler();
  }

  middleware() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'temp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
