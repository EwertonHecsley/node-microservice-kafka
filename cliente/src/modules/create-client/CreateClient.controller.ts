import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateCliente.useCase";

export class CreateClientController {
    private useCase: CreateClientUseCase;

    constructor() {
        this.useCase = new CreateClientUseCase();
    }

    async handle(request: Request, response: Response) {
        const client = await this.useCase.execute(request.body);

        return response.status(201).json(client);
    }
}