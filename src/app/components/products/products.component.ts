import { Component, OnInit } from '@angular/core';
import { Wojak } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public myShoppingCart:Wojak[] = [];
  public myTotal = 0;

  public wojaks:Wojak[] = [
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


  constructor() { }

  ngOnInit(): void {
  }

  onAddToShoppingCart(wojak: Wojak){
    console.log(wojak);
    this.myShoppingCart.push(wojak);
    this.myTotal += wojak.price;
  }
}
