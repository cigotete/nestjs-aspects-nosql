import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Author } from './author.entity';
import { Format } from './format.entity';

@Schema()
export class Book extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  idremote: number;
  @Prop({
    required: true,
    unique: true,
  })
  title: string;
  @Prop({
    required: true,
  })
  authors: Author[];
  translators: string[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: Format[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
