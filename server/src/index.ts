import express from 'express';
import { getConfig } from './config';

const app = express();
const port = 3000;

getConfig();

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
