import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'mini-store';
  public input_name:string = '';
  public img = "./assets/imgs/witheredjak.jpg";

  public imgLoaded(image: string){
    console.log("Now parent knows the image is loaded");
    console.log(image);
  }
}
