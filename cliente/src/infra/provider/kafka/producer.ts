import { kafka } from "./index";

export class KafkaSendMessage {
    async execute(topic: string, payload: any) {
        const producer = kafka.producer();

        await producer.connect();
        console.log(`MESSAGE SENT TO TOPIC: ${topic}`);
        console.log(payload);

        await producer.send({
            topic,
            messages: [
                {
                    value: JSON.stringify(payload)
                }
            ]
        })

        producer.disconnect();
    }
}