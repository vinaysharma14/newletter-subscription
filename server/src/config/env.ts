import joi from 'joi';
import dotenv from 'dotenv';

dotenv.config();

type Config = {
  MONGO_DB: string;
  MONGO_HOST: string;
  MONGO_PORT: string;
  EXPRESS_PORT: string;
}

// schema for env vars validation
const envVarsSchema = joi.object({
  MONGO_DB: joi.string().required(),
  MONGO_HOST: joi.string().required(),
  MONGO_PORT: joi.number().required(),
  EXPRESS_PORT: joi.number().default(3050),
});

export const getConfig = (): Config | undefined => {
  try {
    const { error, value } = envVarsSchema.validate({
      MONGO_DB: process.env.MONGO_DB,
      MONGO_HOST: process.env.MONGO_HOST,
      MONGO_PORT: process.env.MONGO_PORT,
      EXPRESS_PORT: process.env.EXPRESS_PORT,
    });

    if (error) {
      throw error;
    }

    return value;
  } catch (error) {
    console.error(`Env vars validation failed: ${error}`);
  }
};
