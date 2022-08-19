import express, { Express } from 'express';
import router from './routes';
import db from './database/db';

class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.routes();
  }

  private routes = () => {
    this.app.use(express.json());
    this.app.use(router);
  };

  public start = (PORT: string | number): void => {
    this.app.listen(PORT, async () => {
      await db
        .sync()
        .then(() => console.log(`Running on: http://localhost:${PORT}`))
        .catch((err) => console.log('Unable to connect to the database:', err));
    });
  };
}

export default App;
