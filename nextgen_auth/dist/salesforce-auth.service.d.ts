import { OnModuleInit } from '@nestjs/common';
export declare class SalesforceAuthService implements OnModuleInit {
    private client;
    onModuleInit(): void;
    getTokenAndSend(payload: {
        grant_type: string;
        client_id: string;
        client_secret: string;
        username: string;
        password: string;
    }): Promise<any>;
}
