import { Injectable } from '@angular/core';
import { Wojak } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart:Wojak[] = [];
  private myTotal = 0;

  public addWojak(wojak: Wojak){
    console.log(wojak);
    this.myShoppingCart.push(wojak);
    this.myTotal += wojak.price;
  }

  public getTotal(){
    return this.myTotal
  }

  public getShoppingCart(){
    return this.myShoppingCart;
  }

  constructor() { }
}
