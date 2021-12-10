import { Component, OnInit, Input } from '@angular/core';
import { Wojak } from '../../models/product.model'

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
  @Input() wojak: Wojak = {
    id: '',
    name: '',
    img: '',
    price: 0
  };
}
