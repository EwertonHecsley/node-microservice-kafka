import { Router } from 'express';
import { CreateOrderController } from './CreateOrder.controller';

const route = Router();

const routeOrder = new CreateOrderController();

route.post('/order', (req, res) => routeOrder.handle(req, res));

export default route;