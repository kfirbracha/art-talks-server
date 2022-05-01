import { Prop, Schema, ModelDefinition, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userName: string;

  @Prop()
  password: string;

  @Prop()
  imageDesc: string;

  @Prop()
  url: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
