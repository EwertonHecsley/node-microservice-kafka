import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import router from './modules/create-client/routes';
import { HttpErrorMiddleware } from './modules/middleware/httpError.middleware';

const PORT = process.env.PORT ?? 3001;

const app = express();

app.use(express.json());

app.use(router);

app.use(HttpErrorMiddleware);


app.listen(PORT, () => console.log(`Server client is running on PORT ${PORT}`));