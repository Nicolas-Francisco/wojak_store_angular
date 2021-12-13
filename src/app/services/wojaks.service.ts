import { Injectable } from '@angular/core';
import { Wojak } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class WojaksService {
  private wojaks:Wojak[] = [
    {
      id: '01',
      name: 'twinkjak',
      img: './assets/imgs/twinkjak.jpg',
      price: 99.99
    },
    {
      id: '02',
      name: 'cryjak',
      img: './assets/imgs/cryjak.jpg',
      price: 199.99
    },
    {
      id: '03',
      name: 'ladyjak',
      img: './assets/imgs/ladyjak.jpg',
      price: 299.99
    },
    {
      id: '01',
      name: 'darkjak',
      img: './assets/imgs/darkjak.jpg',
      price: 159.99
    }
  ];

  public getWojaks(){
    return this.wojaks;
  }

  constructor() { }
}
