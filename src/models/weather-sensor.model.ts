import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSensorDocument, SensorData } from './sensor.model';

@Schema()
export class WeatherSensorDocument extends BaseSensorDocument {
  @Prop({ type: [{ pressure: Number, wind_speed: Number }], required: true })
  data: WeatherSensorData[];
}

export interface WeatherSensorData extends SensorData {
  pressure: number;
  wind_speed: number;
}

export const WeatherSensorModel = SchemaFactory.createForClass(WeatherSensorDocument);
