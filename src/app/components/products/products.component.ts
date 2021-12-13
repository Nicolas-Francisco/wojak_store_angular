import { Component, OnInit } from '@angular/core';
import { WojaksService } from 'src/app/services/wojaks.service';
import { Wojak } from '../../models/product.model';
import { StoreService } from "../../services/store.service"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public myShoppingCart:Wojak[] = [];
  public myTotal = 0;

  public wojaks:Wojak[] = [];

  constructor(
    private StoreService: StoreService,
    private WojakService: WojaksService
  ) {
    this.myShoppingCart = this.StoreService.getShoppingCart();
    this.wojaks = this.WojakService.getWojaks();
    this.myTotal = this.StoreService.getTotal();
  }

  ngOnInit(): void {
  }

  onAddToShoppingCart(wojak: Wojak){
    this.StoreService.addWojak(wojak);
    this.myTotal = this.StoreService.getTotal();
  }
}
