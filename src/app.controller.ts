import { Body, Controller, Get, Param, Post, UnauthorizedException } from '@nestjs/common';
import { AppService } from './app.service';
import { BaseSensorDocument } from './models/sensor.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  login(@Body() credentials: { username: string, password: string }): { accessToken: string } {
    const validCredentials = true;
    if (validCredentials) {
      const accessToken = 'token_de_acceso';
      return { accessToken };
    } else {
      throw new UnauthorizedException('Usuario y/o contraseña incorrectos');
    }
  }

  @Get('get-all-sensors')
  async findAll(): Promise<BaseSensorDocument[]> {
    return this.appService.findAll();
  }

  @Post('sensor/:sensorId')
  async addData(@Param('sensorId') sensorId: number, @Body() dataEntry: Record<string, any>): Promise<BaseSensorDocument> {
    return this.appService.addData(sensorId, dataEntry);
  }
}
