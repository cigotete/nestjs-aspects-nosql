import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Author extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  name: string;
  birth_year: number;
  death_year: number;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
