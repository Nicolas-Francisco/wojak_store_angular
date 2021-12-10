import { Component, Input } from '@angular/core';
import { Wojak } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'mini-store';
  public input_name:string = '';
  public img = "./assets/imgs/witheredjak.jpg";

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

  public imgLoaded(image: string){
    console.log("Now parent knows the image is loaded");
    console.log(image);
  }
}
