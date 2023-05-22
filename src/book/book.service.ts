import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './entities/book.entity';
import { Model } from 'mongoose';
@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<Book>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    try {
      const createdBook = await this.bookModel.create(createBookDto);
      return createdBook;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `Book with idremote ${createBookDto.idremote} already exists`,
        );
      }
      throw new InternalServerErrorException(`Error creating book`);
    }
  }

  findAll() {
    const books = this.bookModel.find();
    return books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
