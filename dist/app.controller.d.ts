import { AppService } from './app.service';
import { BaseSensorDocument } from './models/sensor.model';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    login(credentials: {
        username: string;
        password: string;
    }): {
        accessToken: string;
    };
    findAll(): Promise<BaseSensorDocument[]>;
    addData(sensorId: number, dataEntry: Record<string, any>): Promise<BaseSensorDocument>;
}
