import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }

  async update(id: string, createBookDto: CreateBookDto): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, createBookDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Book> {
    return this.bookModel.findByIdAndDelete(id).exec();
  }
}