type CreateclientRequest = {
    name: string;
    password: string;
    email: string;
    phone: string
}

export class CreateClientUseCase {
    constructor() { }

    async execute(data: CreateclientRequest) { }
}