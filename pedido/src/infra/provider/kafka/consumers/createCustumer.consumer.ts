import { kafkaConsumer } from "../kafka.consumer";

export const createCustomerConsumer = async () => {
    console.log("COSTUMER CONSUMER");

    const consumer = await kafkaConsumer('CUSTOMER_CREATED');
    await consumer.run({
        eachMessage: async ({ message }) => {
            const messageToString = message.value?.toString();
            console.log(messageToString);
        }
    });
}

createCustomerConsumer()