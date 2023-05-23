import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './entities/book.entity';
import { Model, isValidObjectId } from 'mongoose';
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
      this.handleException(error);
    }
  }

  findAll() {
    const books = this.bookModel.find();
    return books;
  }

  async findOne(term: string) {
    let book: Book;
    if (!isNaN(+term)) {
      // If is looking for a book by idremote
      book = await this.bookModel.findOne({ idremote: term });
    }

    if (!book && isValidObjectId(term)) {
      // If is looking for a book by internal id
      book = await this.bookModel.findById(term);
    }

    if (!book) {
      // If is looking for a book by title
      book = await this.bookModel.findOne({ title: term });
    }

    if (!book) {
      throw new NotFoundException(`Book with term ${term} not found`);
    }
    return book;
  }

  async update(term: string, updateBookDto: UpdateBookDto) {
    const book = await this.findOne(term);
    /*if (updateBookDto.title) {
      updateBookDto.title = updateBookDto.title.toLowerCase();
    }*/
    try {
      await book.updateOne(updateBookDto);
      return { ...book.toJSON(), ...updateBookDto };
    } catch (error) {
      this.handleException(error);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }

  private handleException(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Book ${JSON.stringify(error.keyValue)} already exists`,
      );
    }
    throw new InternalServerErrorException(`Error creating book`);
  }
}
