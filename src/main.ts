import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from './ws.adapter';
import * as dotenv from 'dotenv';
var cors = require('cors')

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //app.enableCors();
  app.use(cors())

  //app.use(function (request, response, next) {
  //  response.header("Access-Control-Allow-Origin", "*");
  //  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //  next();
  //});

  app.useWebSocketAdapter(new WsAdapter(app));

  await app.listen(process.env.PORT || 3000);

}
bootstrap();
