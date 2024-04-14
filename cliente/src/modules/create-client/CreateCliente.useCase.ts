import { HttpException } from "../middleware/HttpException";
import { ClientReposiory } from "../repository/ClientRepository";

export type CreateclientRequest = {
    name: string;
    password: string;
    email: string;
    phone: string;
}

export class CreateClientUseCase {
    private clientRepository: ClientReposiory;

    constructor() {
        this.clientRepository = new ClientReposiory();
    }

    async execute(data: CreateclientRequest) {
        const client = await this.clientRepository.findClientByEmail(data.email);
        if (client) throw new HttpException(400, "Email is already");

        const clientCreated = await this.clientRepository.create(data);

        return clientCreated;
    }

}