import { CartService } from './../../services/cart.service';
import { Book } from '../../types/Book';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent{
  @Input() book: Book = {} as Book;
  isInCart: boolean = false;
  //@Output() emitBook = new EventEmitter<Book>;
  //  {
  //   name: '',
  //   author: '',
  //   image: '',
  //   price: 0
  // }

  constructor(private cartService: CartService) {}

  addToCart() {
    console.log("add button Clicked");
    this.cartService.add(this.book);
    this.isInCart = true;
    //this.emitBook.emit(this.book);
  }

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);



  }
  // ngOnDestroy(): void {
  //     console.log({onDestroy: "OnDestroy"});
  //   clearInterval(this.myInterval);

  // }

  // myInterval : any = null;

  // ngOnInit(): void {
  //   this.myInterval = setInterval(()=>{
  //     console.log("Hello");

  //   },1000);
  }




