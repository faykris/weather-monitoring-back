/*
import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('cronJobUpdate')
  handleCronJobUpdate(@MessageBody() data: any): void {
    this.server.emit('cronJobUpdate', data);
  }
}
*/