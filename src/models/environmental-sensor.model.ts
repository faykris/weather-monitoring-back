import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSensorDocument, SensorData } from './sensor.model';

@Schema()
export class EnvironmentalSensorDocument extends BaseSensorDocument {
  @Prop({ type: [{ noise_level: Number, air_quality: String }], required: true })
  data: EnvironmentalSensorData[];
}

export interface EnvironmentalSensorData extends SensorData {
  noise_level: number;
  air_quality: string;
}

export const EnvironmentalSensorModel = SchemaFactory.createForClass(EnvironmentalSensorDocument);
