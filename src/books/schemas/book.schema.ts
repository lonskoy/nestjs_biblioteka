import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  numberOfPages: number;

  @Prop({ default: false })
  statusInRead: boolean;

  @Prop()
  reader: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);