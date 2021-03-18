import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import { StatusCodes } from 'http-status-codes';

import router from '../router';

export const configureServer = (port: string) => {
  const app = express();

  // enable cors
  app.use(cors());

  // secures app by setting various HTTP headers
  app.use(helmet());

  // parse incoming request body
  app.use(express.json({ limit: '100b', type: 'application/json' }));

  // mount all the routes
  app.use(router);

  // handle invalid api endpoints
  app.use((_, res) => {
    res.status(StatusCodes.NOT_FOUND).send(JSON.stringify('API not found'));
  });

  // start the server
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });

  return app;
};
