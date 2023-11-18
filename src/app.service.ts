import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { AppGateway } from './app.gateway';
import {
  BaseSensorDocument,
} from './models/sensor.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('sensors') private readonly baseSensorModel: Model<BaseSensorDocument>,
    private readonly appGateway: AppGateway
  ) {}

  getHello(): string {
    return 'Hello sensors!';
  }

  async findAll(): Promise<BaseSensorDocument[]> {
    const sensors = await this.baseSensorModel.find();
    return sensors;
  }

  async addData(sensorId: number, dataEntry: Record<string, any>): Promise<BaseSensorDocument> {
    return this.baseSensorModel.findOneAndUpdate(
      { sensor_id: sensorId },
      { $push: { data: dataEntry } },
      { new: true },
    );
  }

  @Cron("0 */15 * * * *")
  async handleCron() {
    const currentTime = new Date().toISOString();
    const sensor1Id = 1;
    const sensor2Id = 2;
    const sensor3Id = 3;

    const newSensor1Record = {
      timestamp: currentTime,
      temperature: this.getRandomValue(25.5, 26.5),
      humidity: this.getRandomValue(60.0, 62.0)
    };

    const newSensor2Record = {
      timestamp: currentTime,
      pressure: this.getRandomValue(1013.0, 1013.9),
      wind_speed: this.getRandomValue(4.5, 5.5)
    };

    const newSensor3Record = {
      timestamp: currentTime,
      noise_level: this.getRandomValue(40.1, 43.1),
      air_quality: this.getRandomString(["Buena", "Moderada", "Mala"])
    };
    
    await this.addData(sensor1Id, newSensor1Record);
    await this.addData(sensor2Id, newSensor2Record);
    await this.addData(sensor3Id, newSensor3Record);

    console.log(`Cron job executed at ${currentTime}`);
    const updateMessage = 'El cron job se está ejecutando...';
    this.appGateway.handleCronJobUpdate(updateMessage);
  }

  private getRandomValue(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  private getRandomString(values: string[]): string {
    return values[Math.floor(Math.random() * values.length)];
  }
}
