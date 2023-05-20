import { Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface Author extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  name: string;
  birth_year: number;
  death_year: number;
}
