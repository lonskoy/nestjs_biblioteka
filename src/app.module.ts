import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://lonskoy0304:QeV6cIoPj2x5Y3K6@cluster0.lb8c1lp.mongodb.net/biblioteka?retryWrites=true&w=majority', {
      serverSelectionTimeoutMS: 5000, // Опционально, таймаут ожидания сервера
    }),
    BooksModule,
  ],
})
export class AppModule {}