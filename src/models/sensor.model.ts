import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface SensorData {
  timestamp: string;
}

@Schema()
export class BaseSensorDocument extends Document {
  @Prop({ required: true })
  sensor_id: number;

  @Prop({ required: true })
  sensor_name: string;

  @Prop({ type: [Object], required: true })
  data: SensorData[];
}

export const BaseSensorModel = SchemaFactory.createForClass(BaseSensorDocument);
