import { ObjectId } from 'mongoose';
export interface Iuser {
  userName: string;
  password: string;
  _id?: ObjectId;
}
