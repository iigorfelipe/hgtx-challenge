import express, { json } from 'express';
import router from './routes';
import db from './database/db';

const app = express();

app.use(json());
app.use(router);

app.listen(process.env.PORT, async () => {
  await db
    .sync()
    .then(() => console.log(`Running on: http://localhost:${process.env.PORT}`))
    .catch((err) => console.log('Unable to connect to the database:', err));
});
