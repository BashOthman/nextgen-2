import { SalesforceAuthService } from './salesforce-auth.service';
import { VaultAuthService } from './vault-auth.service';
export declare class AppController {
    private readonly salesforceAuthService;
    private readonly vaultAuthService;
    constructor(salesforceAuthService: SalesforceAuthService, vaultAuthService: VaultAuthService);
    salesforceAuth(body: any): Promise<any>;
    vaultAuth(body: any): Promise<any>;
}
