import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  BaseSensorDocument,
} from './models/sensor.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('sensors') private readonly baseSensorModel: Model<BaseSensorDocument>
  ) {}

  getHello(): string {
    return 'Hello sensors!';
  }

  async findAll(): Promise<BaseSensorDocument[]> {
    const sensors = await this.baseSensorModel.find();
    return sensors;
  }
}
