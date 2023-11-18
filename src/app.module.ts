import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { AppGateway } from './app.gateway';
import { BaseSensorModel } from './models/sensor.model';
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
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AppGateway ], // AppGateway
})
export class AppModule {}
