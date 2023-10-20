import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>
    ){}

    
  findAll() {
    return this.bookRepository.find();
  }

  findOne(id: number) {
    return this.bookRepository.findOneBy({id});
  }
  
  create(createBookDto: CreateBookDto) {
    var addedBook = this.bookRepository.create(createBookDto);
    this.bookRepository.save(addedBook);
    return addedBook;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    var updatedBook = await this.bookRepository.update({id},updateBookDto);
    return updatedBook;
  }

  remove(id: number) {
    return this.bookRepository.delete(id);
  }
}
