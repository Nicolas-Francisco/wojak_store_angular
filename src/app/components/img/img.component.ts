import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  // Variables del componente
  public name:string = 'BlackFire'

  // Inputs
  @Input() img:string = '';
  @Input() input_name:string = '';
  @Output() loaded = new EventEmitter<string>();
  // counter = 0;
  // counter_function: number | undefined;

  // Constructor
  constructor() {
    // before render
    console.log("constructor_img", "input_name value ->", this.input_name);
  }

  ngOnInit(): void {
    // before render
    console.log("onInit_img");

    // funcion de creacion de intervalos de una ventana
    // this.counter_function = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log("counter_img ->", this.counter);
    // }, 1000)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before render
    // this runs everytime something changes
    console.log("onChanges_img", "input_name value ->", this.input_name);
  }

  ngAfterViewInit(): void {
    // after render
    console.log("afterViewInit_img");
  }

  ngOnDestroy(): void {
    // delete
    console.log("onDestroy_img");
    // window.clearInterval(this.counter_function);
  }

  // Métodos internos
  public imgLoaded(){
    console.log("main img loaded");
    this.loaded.emit(this.img);
  }
}
