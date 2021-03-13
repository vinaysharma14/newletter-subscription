import helmet from 'helmet';
import express from 'express';

import router from '../router';

export const configureServer = () => {
  const app = express();

  // secures app by setting various HTTP headers
  app.use(helmet());

  // parse incoming request body
  app.use(express.json({ limit: '100b', type: 'application/json' }));

  // mount all the routes
  app.use(router);

  // handle invalid api endpoints
  app.use((_, res) => {
    res.status(404).send(JSON.stringify('API not found'));
  });

  return app;
};
