import * as mongoose from 'mongoose';
import mongo from '@nestjs/mongoose';

export const databaseProviders = [
  {
      
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://admin:0CGqjC4r9lrlgG0S@appdb.h1nqd.mongodb.net/appDB?retryWrites=true&w=majority',
      ),
    //   mongoose.connect('mongodb://localhost/nest'),
  },
];
