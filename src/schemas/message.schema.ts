import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Image } from './image.schema';
import { User } from './user.schema';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop()
  msg: string;

  @Prop()
  image_id: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user_id: User;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
