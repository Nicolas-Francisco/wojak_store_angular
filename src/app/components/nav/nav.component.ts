import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public show_menu = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleMenu(){
    this.show_menu = !this.show_menu;
  }

}
