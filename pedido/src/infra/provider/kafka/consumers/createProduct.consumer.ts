import { HttpException } from "../../../../modules/middleware/HttpException";
import { KafkaConsumer } from "../kafka.consumer";
import { CustomerRepository } from "./repository/CustomerRepository";

export type ProductCosumer = {
    id: string;
    code: string;
}

export class CreateProductConsumer {
    private kafkaService: KafkaConsumer;
    private customerRepository: CustomerRepository;

    constructor() {
        this.kafkaService = new KafkaConsumer(),
            this.customerRepository = new CustomerRepository()
    }

    async createProductConsumer() {
        console.log('PRODUCT CONSUMER');

        const consumer = await this.kafkaService.kafkaConsumer('PRODUCT_CREATED');
        await consumer.run({
            eachMessage: async ({ message }) => {
                const messageToString = message.value?.toString();
                if (!messageToString) throw new HttpException(404, "Message not found");

                const product = JSON.parse(messageToString) as ProductCosumer;
                console.log(product);
                await this.customerRepository.createProduct(product);
            }
        })
    }
}

new CreateProductConsumer().createProductConsumer();