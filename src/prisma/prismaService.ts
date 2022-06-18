import { PrismaClient } from "@prisma/client";

export class PrismaService extends PrismaClient {
    // set instance property
    private static instance: PrismaService;

    // instantiate the PrismaService
    private constructor() {
        super();
    }

    // get instance method
    private static getInstance(): PrismaService {
        if (!PrismaService.instance) {
            PrismaService.instance = new PrismaService();
        }
        return PrismaService.instance;
    }
}
