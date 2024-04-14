import 'dotenv/config';
import express from 'express';
import './infra/provider/kafka/consumer';
import 'express-async-errors';
import router from './module/create-product/routes';
import { HttpErrorMiddleware } from './module/middleware/httpError.middleware';

const PORT = process.env.PORT ?? 3003;

const app = express();

app.use(express.json());

app.use(router);

app.use(HttpErrorMiddleware);


app.listen(PORT, () => console.log(`Server client is running on PORT ${PORT}`));