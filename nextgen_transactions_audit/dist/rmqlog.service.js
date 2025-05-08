"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RmqLoggerService = void 0;
const common_1 = require("@nestjs/common");
const amqp = require("amqplib");
let RmqLoggerService = class RmqLoggerService {
    async readMessagesFromQueue(queueName) {
        const messages = [];
        const connection = await amqp.connect('amqp://localhost:5672');
        const channel = await connection.createChannel();
        try {
            await channel.assertQueue(queueName, { durable: false });
            let msg;
            while ((msg = await channel.get(queueName, { noAck: true }))) {
                messages.push(msg.content.toString());
            }
        }
        catch (err) {
            messages.push(`Error: ${err.message}`);
        }
        finally {
            await channel.close();
            await connection.close();
        }
        return messages;
    }
};
exports.RmqLoggerService = RmqLoggerService;
exports.RmqLoggerService = RmqLoggerService = __decorate([
    (0, common_1.Injectable)()
], RmqLoggerService);
//# sourceMappingURL=rmqlog.service.js.map