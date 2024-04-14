import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
    brokers: ['current-piglet-8932-us1-kafka.upstash.io:9092'],
    ssl: true,
    sasl: {
        mechanism: 'scram-sha-256',
        username: "Y3VycmVudC1waWdsZXQtODkzMiTdnyVgZzjYgxvYL1v8-SdE9WGnWSb00bVfJWA",
        password: "NmIwNDBhYjQtM2IyMC00NjdkLWI1ODQtOGYyNWM5YzZmNzc3"
    },
    logLevel: logLevel.ERROR,
});

export { kafka };