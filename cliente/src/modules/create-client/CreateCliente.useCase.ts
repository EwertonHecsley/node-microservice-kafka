import { ClientReposiory } from "../repository/ClientRepository";

export type CreateclientRequest = {
    name: string;
    password: string;
    email: string;
    phone: string;
}

export class CreateClientUseCase {
    constructor(private readonly clientRepository: ClientReposiory) { }

    async execute(data: CreateclientRequest) {
        const costumer = await this.clientRepository.findClientByEmail(data.email);
        if (costumer) throw new Error("Email is already");

        const costumerCreated = await this.clientRepository.create(data);

        return costumerCreated;
    }

}