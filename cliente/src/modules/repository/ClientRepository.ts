import { PrismaClient } from "@prisma/client";
import { prismaCliente } from "../../infra/database/PrismaCliente";
import { CreateclientRequest } from "../create-client/CreateCliente.useCase";

export class ClientReposiory {
    private prismaCliente: PrismaClient

    constructor() {
        this.prismaCliente = prismaCliente;
    }

    async create(data: CreateclientRequest): Promise<CreateclientRequest> {
        return await this.prismaCliente.client.create({ data });
    }

    async findClientByEmail(email: string): Promise<CreateclientRequest | null> {
        return await this.prismaCliente.client.findUnique({
            where: {
                email: email
            }
        });
    }
}