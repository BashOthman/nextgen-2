"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesforceAuthService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const microservices_1 = require("@nestjs/microservices");
let SalesforceAuthService = class SalesforceAuthService {
    client;
    onModuleInit() {
        this.client = microservices_1.ClientProxyFactory.create({
            transport: microservices_1.Transport.RMQ,
            options: {
                urls: ['amqp://localhost:5672'],
                queue: 'salesforce_auth_queue',
                queueOptions: {
                    durable: false,
                },
            },
        });
    }
    async getTokenAndSend(payload) {
        const url = 'https://nniushcpengagements--nniuat.sandbox.my.salesforce.com/services/oauth2/token';
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        const data = new URLSearchParams({
            grant_type: payload.grant_type,
            client_id: payload.client_id,
            client_secret: payload.client_secret,
            username: payload.username,
            password: payload.password,
        });
        try {
            const response = await axios_1.default.post(url, data, { headers });
            await this.client
                .emit('salesforce_auth_response', response.data)
                .toPromise();
            return response.data;
        }
        catch (error) {
            const errorData = error.response?.data || error.message;
            await this.client
                .emit('salesforce_auth_error', errorData)
                .toPromise();
            return {
                status: 'error',
                message: errorData,
            };
        }
    }
};
exports.SalesforceAuthService = SalesforceAuthService;
exports.SalesforceAuthService = SalesforceAuthService = __decorate([
    (0, common_1.Injectable)()
], SalesforceAuthService);
//# sourceMappingURL=salesforce-auth.service.js.map