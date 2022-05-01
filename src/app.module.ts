import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { DatabaseModule } from './database/database.module';
import { ImageService } from './database/image/image.service';
import mongoose from 'mongoose';
import { ImageSchema } from './schemas/image.schema';
import { MessageSchema } from './schemas/message.schema';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserSchema } from './schemas/user.schema';

@Module({
  // imports: [DatabaseModule],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    AppGateway,
    ImageService,
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (): Promise<typeof mongoose> =>
        await mongoose.connect(
          'mongodb+srv://admin:0CGqjC4r9lrlgG0S@appdb.h1nqd.mongodb.net/art-talks?retryWrites=true&w=majority',
        ),
    },
    {
      provide: 'IMAGE_MODEL',
      useFactory: (connection: mongoose.Connection) =>
        connection.model('Image', ImageSchema),
      inject: ['DATABASE_CONNECTION'],
    },
    {
      provide: 'MESSAGE_MODEL',
      useFactory: (connection: mongoose.Connection) =>
        connection.model('Message', MessageSchema),
      inject: ['DATABASE_CONNECTION'],
    },
    {
      provide: 'USER_MODEL',
      useFactory: (connection: mongoose.Connection) =>
        connection.model('User', UserSchema),
      inject: ['DATABASE_CONNECTION'],
    },
    AuthService,
  ],
})
export class AppModule {}
