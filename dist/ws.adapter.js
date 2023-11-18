"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsAdapter = void 0;
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
class WsAdapter extends platform_socket_io_1.IoAdapter {
    createIOServer(port, options) {
        const server = super.createIOServer(port, Object.assign(Object.assign({}, options), { cors: { origin: 'http://localhost:4200', methods: ['GET', 'POST', 'PUT', 'DELETE'] } }));
        return server;
    }
}
exports.WsAdapter = WsAdapter;
//# sourceMappingURL=ws.adapter.js.map