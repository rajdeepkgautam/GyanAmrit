import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        id:1,
        name: 'Clean Code',
        author: 'Robert C. Martin',
        image:
          'https://m.media-amazon.com/images/P/B001GSTOAM.01._SCLZZZZZZZ_SX500_.jpg',

        price: 700,
      },

      {
        name: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
        image:
          'https://m.media-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg',
        price: 800,
      },
      {
        name: 'Art of Computer Programming',
        author: ' Donald John Fuller ',
        image:
          'https://m.media-amazon.com/images/I/410vJZbAZGS._SY393_BO1,204,203,200_.jpg',
        price: 12000,
      },
      {
        name: 'Algorithms to Live By',
        author: 'Brian Christian ',
        image:
          'https://m.media-amazon.com/images/I/41bNTo6YS8L._SX328_BO1,204,203,200_.jpg',
        price: 400,
      },
      {
        name: 'Programming with Java',
        author: 'E Balagurusamy',
        image:
          'https://m.media-amazon.com/images/I/41Fji-VVHYL._SX380_BO1,204,203,200_.jpg',
        price: 600,
      },
      {
        name: 'Let Us C ',
        author: 'Yashavant Kanetkar ',
        image:
          'https://m.media-amazon.com/images/I/51XbdK9KxhL._SX331_BO1,204,203,200_.jpg',
        price: 450,
      },
    ];
  }

}
