import { PrismaClient } from "@prisma/client";
import { ProductType } from "../create-product/CreateProduct.useCase";

export class ProductRepository {
    private prismaService: PrismaClient;

    constructor() {
        this.prismaService = new PrismaClient();
    }

    async create(data: ProductType): Promise<ProductType> {
        return await this.prismaService.product.create(
            {
                data: {
                    name: data.name,
                    code: data.code,
                    quantity: data.quantity,
                    price: data.price
                }
            })
    }

    async findProductByCode(code: string): Promise<ProductType | null> {
        return await this.prismaService.product.findFirst({ where: { code } });
    }
}