// climate-sensor.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSensorDocument, SensorData } from './sensor.model';

@Schema()
export class ClimateSensorDocument extends BaseSensorDocument {
  @Prop({ type: [{ temperature: Number, humidity: Number }], required: true })
  data: ClimateSensorData[];
}

export interface ClimateSensorData extends SensorData {
  temperature: number;
  humidity: number;
}

export const ClimateSensorModel = SchemaFactory.createForClass(ClimateSensorDocument);
