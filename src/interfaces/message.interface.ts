import { Document, ObjectId } from 'mongoose';
export interface Message extends Document {
  message: String;
  image: ObjectId;
  user: ObjectId;
}
