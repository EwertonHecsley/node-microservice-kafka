import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateOrder.useCase";

export class CreateOrderController {
    private orderService: CreateOrderUseCase;

    constructor() {
        this.orderService = new CreateOrderUseCase();
    }

    async handle(request: Request, response: Response) {
        const order = await this.orderService.execute(request.body);

        return response.status(201).json(order);
    }
}