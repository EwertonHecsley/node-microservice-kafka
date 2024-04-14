import { Router } from 'express';
import { CreateClientController } from './CreateClient.controller';

const router = Router();

const clientRoute = new CreateClientController();

router.post("/client", clientRoute.handle);

export default router;