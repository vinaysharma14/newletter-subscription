import { getEnvConfig, configureServer, configureDb } from './config';

const startServer = async () => {
  const envConfig = getEnvConfig();

  if (envConfig) {
    const {
      DB,
      MONGO_HOST,
      MONGO_PORT,
      EXPRESS_PORT,
    } = envConfig;

    await configureDb(DB, MONGO_HOST, MONGO_PORT);
    configureServer(EXPRESS_PORT);
  }
};

startServer();
