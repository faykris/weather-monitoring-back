import { Server } from 'socket.io';
export declare class AppGateway {
    server: Server;
    handleCronJobUpdate(data: any): void;
}
