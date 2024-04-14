import 'dotenv/config';
import express from 'express';
import './infra/provider/kafka/consumers'
import 'express-async-errors';
import { HttpErrorMiddleware } from './modules/middleware/httpError.middleware';

const PORT = process.env.PORT ?? 3002;

const app = express();

app.use(express.json());

app.use(HttpErrorMiddleware);


app.listen(PORT, () => console.log(`Server client is running on PORT ${PORT}`));