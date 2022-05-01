import { ObjectId } from 'mongoose';
export class CreateMessageDto {
  msg: String;
  image_id: ObjectId;
  user_id: ObjectId;
}
