import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './entities/book.entity';
import { Author, AuthorSchema } from './entities/author.entity';
import { Format, FormatSchema } from './entities/format.entity';

@Module({
  controllers: [BookController],
  providers: [BookService],
  imports: [
    MongooseModule.forFeature([
      { name: Book.name, schema: BookSchema },
      { name: Author.name, schema: AuthorSchema },
      { name: Format.name, schema: FormatSchema },
    ]),
  ],
})
export class BookModule {}
