import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Wojak } from 'src/app/models/product.model';
import { WojaksService } from "../../services/wojaks.service"

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public wojak:Wojak = {
    id: '',
    name: '',
    img: '',
    price: 0
  };

  constructor(
    private route: ActivatedRoute,
    private wojaksService: WojaksService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id:string = params['id'];
      this.wojak = this.wojaksService.getWojak(id)!;
    });
  }
}
