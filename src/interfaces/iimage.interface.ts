import { Document } from 'mongoose';
export interface Iimage extends Document {
  readonly artist: string;
  readonly imageName: string;
  readonly imageDesc: string;
  readonly url: string;
}
