import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Wojak } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart:Wojak[] = [];
  private myTotal = 0;
  private myCart = new BehaviorSubject<Wojak[]>([]);

  // Observable para el carrito
  myCart$ = this.myCart.asObservable();

  public addWojak(wojak: Wojak){
    console.log(wojak);
    this.myShoppingCart.push(wojak);
    this.myTotal += wojak.price;

    // Notificación de suscripción
    this.myCart.next(this.myShoppingCart);
  }

  public getTotal(){
    return this.myTotal
  }

  public getShoppingCart(){
    return this.myShoppingCart;
  }

  constructor() { }
}
