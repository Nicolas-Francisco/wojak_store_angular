import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
  @Output() addedProduct = new EventEmitter<Wojak>();

  public onAddToCart(){
    this.addedProduct.emit(this.wojak);
  }
}
