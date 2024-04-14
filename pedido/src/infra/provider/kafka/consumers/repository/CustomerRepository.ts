import { PrismaClient } from "@prisma/client";
import { CustomerCosumer } from "../createCustumer.consumer";

export class CustomerRepository {
    private prismaService: PrismaClient;

    constructor() {
        this.prismaService = new PrismaClient();
    }

    async create(data: CustomerCosumer): Promise<CustomerCosumer> {
        return await this.prismaService.customer.create({ data: { email: data.email, externalId: data.id } });
    }
}