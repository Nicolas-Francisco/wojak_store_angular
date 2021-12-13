import { Component, OnInit } from '@angular/core';
import { StoreService } from "../../services/store.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public show_menu = false;
  public counter = 0;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(wojaks => {
      this.counter = wojaks.length;
    });
  }

  public toggleMenu(){
    this.show_menu = !this.show_menu;
  }

}
