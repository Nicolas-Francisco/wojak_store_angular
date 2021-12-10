import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  // Componentes del producto
  product = {
    name: 'twinkjak',
    img: './assets/imgs/twinkjak.jpg',
    price: 99.99
  }
}
