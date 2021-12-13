import { Injectable } from '@angular/core';
import { Wojak } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class WojaksService {
  private wojaks:Wojak[] = [
    {
      id: '1',
      name: 'twinkjak',
      img: './assets/imgs/twinkjak.jpg',
      price: 99.99
    },
    {
      id: '2',
      name: 'cryjak',
      img: './assets/imgs/cryjak.jpg',
      price: 199.99
    },
    {
      id: '3',
      name: 'ladyjak',
      img: './assets/imgs/ladyjak.jpg',
      price: 299.99
    },
    {
      id: '4',
      name: 'darkjak',
      img: './assets/imgs/darkjak.jpg',
      price: 159.99
    }
  ];

  public getWojaks(){
    return this.wojaks;
  }

  public getWojak(id: string){
    return this.wojaks.find(item => id === item.id);
  }

  constructor() { }
}
