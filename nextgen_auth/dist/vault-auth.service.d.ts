export declare class VaultAuthService {
    private readonly authUrl;
    private client;
    onModuleInit(): void;
    authenticate(body: {
        username: string;
        password: string;
    }): Promise<any>;
}
