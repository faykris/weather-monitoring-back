import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BaseSensorModel,
} from './models/sensor.model';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.M_USER}:${process.env.M_PASS}@${process.env.M_CLUSTER}/${process.env.M_DATABASE}`,
      { dbName: 'weatherMonitoring' }    
    ),
    MongooseModule.forFeature([
      { name: 'sensors', schema: BaseSensorModel },
    ]),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
