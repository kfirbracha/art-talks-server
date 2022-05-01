import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Image, ImageSchema } from 'src/schemas/image.schema';
import { databaseProviders } from './database.provider';
import { imageProviders } from './image/image.provider';
import { ImageService } from './image/image.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Image.name,
        schema: ImageSchema,
      },
    ]),
  ],
  // exports: [ImageService],
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (): Promise<typeof mongoose> =>
        await mongoose.connect(
          'mongodb+srv://admin:0CGqjC4r9lrlgG0S@appdb.h1nqd.mongodb.net/appDB?retryWrites=true&w=majority',
        ),
    },
    {
      provide: 'IMAGE_MODEL',
      useFactory: (connection: mongoose.Connection) =>
        connection.model('Image', ImageSchema),
      inject: ['DATABASE_CONNECTION'],
    },
    // ...imageProviders,
    // ImageService,
    ,
  ],
  exports: [ImageService],
})
export class DatabaseModule {}
