import { HttpException } from "../../../../modules/middleware/HttpException";
import { KafkaConsumer } from "../kafka.consumer";
import { CustomerRepository } from "./repository/CustomerRepository";

export type CustomerCosumer = {
    id: string;
    email: string;
}

export class CreateCustomerConsumer {
    private kafkaService: KafkaConsumer;
    private customerRepository: CustomerRepository;

    constructor() {
        this.kafkaService = new KafkaConsumer(),
            this.customerRepository = new CustomerRepository()
    }

    async createCustomerConsumer() {
        console.log('COSTUMER CONSUMER');

        const consumer = await this.kafkaService.kafkaConsumer('CUSTOMER_CREATED');
        await consumer.run({
            eachMessage: async ({ message }) => {
                const messageToString = message.value?.toString();
                if (!messageToString) throw new HttpException(404, "Message not found");

                const customer = JSON.parse(messageToString) as CustomerCosumer;
                console.log(customer);
                await this.customerRepository.create(customer);
            }
        })
    }
}

new CreateCustomerConsumer().createCustomerConsumer();