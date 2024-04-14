import { HttpException } from "../middleware/HttpException";
import { ClientReposiory } from "../repository/ClientRepository";
import { HashPasswordService } from "../service/HashPassword.service";

export type CreateclientRequest = {
    name: string;
    password: string;
    email: string;
    phone: string;
}

export class CreateClientUseCase {
    private clientRepository: ClientReposiory;
    private hashService: HashPasswordService

    constructor() {
        this.clientRepository = new ClientReposiory(),
            this.hashService = new HashPasswordService()
    }

    async execute(data: CreateclientRequest) {
        const { name, email, password, phone } = data;

        const client = await this.clientRepository.findClientByEmail(email);
        if (client) throw new HttpException(400, "Email is already");

        const hashPassword = await this.hashService.createHash(password);

        const clientCreated = await this.clientRepository.create({ name, email, phone, password: hashPassword });

        return clientCreated;
    }

}