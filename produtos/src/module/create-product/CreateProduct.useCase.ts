import { KafkaSendMessage } from "../../infra/provider/kafka/consumer/producer";
import { HttpException } from "../middleware/HttpException";
import { ProductRepository } from "../repository/CreateProduct.repository";

export type ProductType = {
    name: string;
    code: string;
    quantity: number;
    price: number;

    id?: string;
}

export class CreateProductUseCase {
    private productRepository: ProductRepository;
    private kafkaService: KafkaSendMessage;

    constructor() {
        this.productRepository = new ProductRepository(),
            this.kafkaService = new KafkaSendMessage()
    }

    async execute(data: ProductType) {
        const product = await this.productRepository.findProductByCode(data.code);
        if (product) throw new HttpException(400, 'Product already exists');

        const productCreated = await this.productRepository.create(data);

        await this.kafkaService.execute('PRODUCT_CREATED', { id: productCreated.id, code: productCreated.code });

        return productCreated;
    }
}