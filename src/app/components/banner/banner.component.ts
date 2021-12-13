import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public images: string[] = [
    "assets/imgs/banner-1.jpg",
    "assets/imgs/banner-2.jpg"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
