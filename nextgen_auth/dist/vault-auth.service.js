"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultAuthService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const microservices_1 = require("@nestjs/microservices");
let VaultAuthService = class VaultAuthService {
    authUrl = 'https://sb-novo-migrator-na-2025-01-27v2.veevavault.com/api/v20.3/auth';
    client;
    onModuleInit() {
        this.client = microservices_1.ClientProxyFactory.create({
            transport: microservices_1.Transport.RMQ,
            options: {
                urls: ['amqp://localhost:5672'],
                queue: 'vault_auth_queue',
                queueOptions: {
                    durable: false,
                },
            },
        });
    }
    async authenticate(body) {
        const formData = new URLSearchParams();
        formData.append('username', body.username);
        formData.append('password', body.password);
        try {
            const response = await axios_1.default.post(this.authUrl, formData, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            });
            await this.client
                .emit('vault_auth_response', response.data)
                .toPromise();
            return response.data;
        }
        catch (error) {
            return {
                status: 'error',
                message: error.response?.data || error.message,
            };
        }
    }
};
exports.VaultAuthService = VaultAuthService;
exports.VaultAuthService = VaultAuthService = __decorate([
    (0, common_1.Injectable)()
], VaultAuthService);
//# sourceMappingURL=vault-auth.service.js.map