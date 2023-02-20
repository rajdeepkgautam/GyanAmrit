import { Book } from './../types/Book';
import { Component } from '@angular/core';
import { BooksService } from './books.service';

// interface Books {
//   name: string;
//   author: string;
//   image: string;  //Moved to types so can be used anywhere.
//   price: number;
// }

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  constructor(private bookService: BooksService) {}

  books: Book[] = [];

  cart: Book[] = [];

  isVisible: boolean = true;

  // addToCart(book: Book) {
  //   console.log(book);
  // }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.books = this.bookService.getBooks();

    console.log('On Init');
  }

  // toggleBooks() {
  //   this.isVisible = !this.isVisible; implemented directly on button.
  // }

  // handleInput(event: any){

  //   this.myName = event.target.value;
  //   console.log(event.target.value);
  //   //alert("Input")
  // }

  // handleClick() {
  //   alert("Hello There!")
  //   console.log("button Clicked");
  //   this.isdisabled = true;
  // }
}
