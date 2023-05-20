import { Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Author } from './author.entity';
import { Format } from './format.entity';
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
