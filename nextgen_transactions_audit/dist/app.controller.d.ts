import { RmqLoggerService } from './rmqlog.service';
export declare class AppController {
    private readonly rmqLoggerService;
    constructor(rmqLoggerService: RmqLoggerService);
    getLogs(queue: string): Promise<any>;
}
