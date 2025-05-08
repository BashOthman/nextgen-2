"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const salesforce_auth_service_1 = require("./salesforce-auth.service");
const vault_auth_service_1 = require("./vault-auth.service");
const swagger_1 = require("@nestjs/swagger");
let AppController = class AppController {
    salesforceAuthService;
    vaultAuthService;
    constructor(salesforceAuthService, vaultAuthService) {
        this.salesforceAuthService = salesforceAuthService;
        this.vaultAuthService = vaultAuthService;
    }
    async salesforceAuth(body) {
        return await this.salesforceAuthService.getTokenAndSend(body);
    }
    async vaultAuth(body) {
        return await this.vaultAuthService.authenticate(body);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)('salesforce/auth'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                username: { type: 'string' },
                password: { type: 'string' },
                client_id: { type: 'string' },
                client_secret: { type: 'string' },
                grant_type: { type: 'string' },
            },
            required: ['username', 'password', 'client_id', 'client_secret', 'grant_type'],
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "salesforceAuth", null);
__decorate([
    (0, common_1.Post)('vault/auth'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                username: { type: 'string' },
                password: { type: 'string' },
            },
            required: ['username', 'password'],
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "vaultAuth", null);
exports.AppController = AppController = __decorate([
    (0, swagger_1.ApiTags)('Vault & Salesforce Auth'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [salesforce_auth_service_1.SalesforceAuthService, vault_auth_service_1.VaultAuthService])
], AppController);
//# sourceMappingURL=app.controller.js.map