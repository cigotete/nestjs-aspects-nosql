import { Document } from 'mongoose';
import { Author } from './author.entity';
import { Format } from './format.entity';
export class Book extends Document {
  idremote: number;
  title: string;
  authors: Author[];
  translators: string[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: Format[];
}
