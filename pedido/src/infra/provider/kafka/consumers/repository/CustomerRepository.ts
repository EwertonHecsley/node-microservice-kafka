import { PrismaClient } from "@prisma/client";
import { CustomerCosumer } from "../createCustumer.consumer";
import { ProductCosumer } from "../createProduct.consumer";

export class CustomerRepository {
    private prismaService: PrismaClient;

    constructor() {
        this.prismaService = new PrismaClient();
    }

    async create(data: CustomerCosumer): Promise<CustomerCosumer> {
        return await this.prismaService.customer.create({ data: { email: data.email, externalId: data.id } });
    }

    async createProduct(data: ProductCosumer): Promise<ProductCosumer> {
        return await this.prismaService.product.create({ data: { externalId: data.id, code: data.code } });
    }
}