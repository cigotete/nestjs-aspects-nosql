import { join } from 'path'; // en Node
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs-books'),
    BookModule,
  ],
})
export class AppModule {}
