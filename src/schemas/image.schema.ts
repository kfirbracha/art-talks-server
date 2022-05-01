// import * as mongoose from 'mongoose';

// export const ImageSchema = new mongoose.Schema({
//   artist: String,
//   imageName: String,
//   imageDesc: String,
//   url: String,
// });

import { Prop, Schema, ModelDefinition, SchemaFactory } from '@nestjs/mongoose';

export type ImageDocument = Image & Document;

@Schema()
export class Image {
  @Prop()
  artist: string;

  @Prop()
  imageName: string;

  @Prop()
  imageDesc: string;

  @Prop()
  url: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
