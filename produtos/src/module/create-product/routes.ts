import { Router } from 'express';
import { ProductController } from './CreateProduct.controller';

const router = Router();

const productRoute = new ProductController();

router.post("/product", (req, res) => productRoute.handle(req, res));

export default router;