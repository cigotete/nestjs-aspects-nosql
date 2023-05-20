import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Format extends Document {
  type: string;
  url: string;
}

export const FormatSchema = SchemaFactory.createForClass(Format);
