import { BooksComponent } from './books.component';
import { BooksService } from './books.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [BooksComponent, BookComponent, BookDetailComponent],
  providers: [BooksService],
  imports: [CommonModule],
  exports: [BooksComponent]
})
export class BooksModule {}
