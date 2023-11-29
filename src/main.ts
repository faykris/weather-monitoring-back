import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from './ws.adapter';
import * as dotenv from 'dotenv';
var cors = require('cors');

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(cors({
    origin: '*',
  }));

  app.useWebSocketAdapter(new WsAdapter(app));

  await app.listen(process.env.PORT || 3000);

}
bootstrap();
