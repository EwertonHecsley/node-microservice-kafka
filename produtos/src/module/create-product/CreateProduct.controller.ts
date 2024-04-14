import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProduct.useCase";

export class ProductController {
    private productService: CreateProductUseCase;

    constructor() {
        this.productService = new CreateProductUseCase();
    }

    async handle(request: Request, response: Response) {
        const product = await this.productService.execute(request.body);

        return response.status(201).json(product);
    }
}