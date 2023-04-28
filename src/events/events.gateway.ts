import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  // create a new chatroom
  @SubscribeMessage('message')
  createRoom(@MessageBody() data: string) {
    return this.server.emit('message', data);
  }
}
