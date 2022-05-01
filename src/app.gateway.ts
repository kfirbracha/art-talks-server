import { Inject } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessageDocument } from './schemas/message.schema';
import { Model } from 'mongoose';
import { CreateMessageDto } from './shared/dto/create-message.dto';
import { AppService } from './app.service';
@WebSocketGateway({ cors: true })
export class AppGateway {
  constructor(
    @Inject('MESSAGE_MODEL')
    private messageModel: Model<MessageDocument>,
    private appService: AppService,
  ) {}
  @WebSocketServer() server;

  @SubscribeMessage('message')
  handleMessage(client: any, payload: CreateMessageDto) {
    this.appService.createMessage(payload);
    this.server.emit('message', payload);
  }
}
