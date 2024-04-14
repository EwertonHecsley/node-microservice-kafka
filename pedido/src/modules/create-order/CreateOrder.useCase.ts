import { OrderRepository } from "../repository/OrderRepository";

export type CreateOrderRequest = {
    clientId: string;
    items: [{
        prodctId: string,
        quantity: number
    }
    ]
}

export class CreateOrderUseCase {
    private orderRepository: OrderRepository;

    constructor() {
        this.orderRepository = new OrderRepository();
    }

    async execute(data: CreateOrderRequest) {
        const { clientId, items } = data;

        return await this.orderRepository.create({ clientId, items });
    }
}