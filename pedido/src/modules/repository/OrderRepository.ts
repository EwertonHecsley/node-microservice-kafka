import { PrismaClient } from "@prisma/client";
import { CreateOrderRequest } from "../create-order/CreateOrder.useCase";

export class OrderRepository {
    private prismaService: PrismaClient;

    constructor() {
        this.prismaService = new PrismaClient();
    }

    async create(data: CreateOrderRequest) {
        return await this.prismaService.order.create({
            data: {
                customerId: data.clientId,
                status: 'AGUARDANDO PAGAMENTO',
                OrderItems: {
                    createMany: {
                        data: {
                            productId: data.items[0].prodctId,
                            quantity: data.items[0].quantity
                        }
                    }

                }
            }
        })
    }

}