import { getEnvConfig, configureServer } from './config';

const startServer = () => {
  const envConfig = getEnvConfig();

  if (envConfig) {
    const { EXPRESS_PORT } = envConfig;

    const server = configureServer();

    server.listen(EXPRESS_PORT, () => {
      console.log(`Server started at http://localhost:${EXPRESS_PORT}`);
    });
  }
};

startServer();
