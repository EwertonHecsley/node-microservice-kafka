import { HttpException } from "../middleware/HttpException";
import { ProductRepository } from "../repository/CreateProduct.repository";
import { } from ''

export type ProductType = {
    name: string;
    code: string;
    quantity: number;
    price: number;

    id?: string;
}

export class CreateProductUseCase {
    private productRepository: ProductRepository;
    private kafkaService: KafkaSendMessage

    constructor() {
        this.productRepository = new ProductRepository()
    }

    async execute(data: ProductType) {
        const product = await this.productRepository.findProductByCode(data.code);
        if (product) throw new HttpException(400, 'Product already exists');

        const productCreated = await this.productRepository.create(data);

        return productCreated;
    }
}