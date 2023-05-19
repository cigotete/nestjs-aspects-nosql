import { Document } from 'mongoose';

export interface Format extends Document {
  type: string;
  url: string;
}
