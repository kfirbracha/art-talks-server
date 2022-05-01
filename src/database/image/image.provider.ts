import { Connection } from 'mongoose';
import { ImageSchema } from 'src/schemas/image.schema';
export const imageProviders = [
  {
    provide: 'IMAGE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Image', ImageSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
