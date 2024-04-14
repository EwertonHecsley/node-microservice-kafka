import { kafka } from "."

export class KafkaConsumer {
    private kafkaService = kafka;

    constructor() {
        this.kafkaService = kafka;
    }

    async kafkaConsumer(topic: string) {
        const consumer = this.kafkaService.consumer({ groupId: "ORDER_APP" });
        await consumer.connect();

        await consumer.subscribe({ topic, fromBeginning: true });

        return consumer;
    }
}
