import { Model } from 'mongoose';
import { AppGateway } from './app.gateway';
import { BaseSensorDocument } from './models/sensor.model';
export declare class AppService {
    private readonly baseSensorModel;
    private readonly appGateway;
    constructor(baseSensorModel: Model<BaseSensorDocument>, appGateway: AppGateway);
    getHello(): string;
    findAll(): Promise<BaseSensorDocument[]>;
    addData(sensorId: number, dataEntry: Record<string, any>): Promise<BaseSensorDocument>;
    handleCron(): Promise<void>;
    private getRandomValue;
    private getRandomString;
}
