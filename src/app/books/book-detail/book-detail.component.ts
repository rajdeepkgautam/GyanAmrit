import { BooksService } from './../books.service';
import { Component, Input } from '@angular/core';
import { Book } from 'src/app/types/Book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  @Input() book: Book = {} as Book;
  books: Book[] = [];
    constructor(private bookService: BooksService) {}
   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.books = this.bookService.getBooks();
   }
  
   
}
