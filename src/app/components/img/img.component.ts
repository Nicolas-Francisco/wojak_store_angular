import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  // Variables del componente
  public name:string = 'BlackFire'

  // Inputs
  @Input() img:string = '';
  @Input() input_name:string = '';
  @Output() loaded = new EventEmitter<string>();

  // Constructor
  constructor() { }

  ngOnInit(): void {
  }

  // Métodos internos
  public imgLoaded(){
    console.log("main img loaded");
    this.loaded.emit(this.img);
  }
}
