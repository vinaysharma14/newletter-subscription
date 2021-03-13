import mongoose from 'mongoose';

export const configureDb = async (db: string, host: string, port: string) => {
  const url = `mongodb://${host}:${port}/${db}`;

  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
  } catch (error) {
    throw new Error(`unable to connect to database: ${error}`);
  }
};
