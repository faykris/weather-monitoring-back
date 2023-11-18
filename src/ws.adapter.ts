import { IoAdapter } from '@nestjs/platform-socket.io';
import * as socketio from 'socket.io';


export class WsAdapter extends IoAdapter {
  createIOServer(port: number, options?: socketio.ServerOptions): any {
    const server = super.createIOServer(port, { ...options, cors: { origin: 'https://weather-monitoring-front.netlify.app', methods: ['GET', 'POST', 'PUT', 'DELETE'] } });
    return server;
  }
  
}
