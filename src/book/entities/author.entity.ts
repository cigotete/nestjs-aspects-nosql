import { Document } from 'mongoose';

export interface Author extends Document {
  name: string;
  birth_year: number;
  death_year: number;
}
