import { IoAdapter } from '@nestjs/platform-socket.io';
import * as socketio from 'socket.io';
export declare class WsAdapter extends IoAdapter {
    createIOServer(port: number, options?: socketio.ServerOptions): any;
}
