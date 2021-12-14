import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { BannerComponent } from '../../components/home/components/banner/banner.component';
import { HomeComponent } from '../../components/home/home.component';
import { HomeRoutingModule } from '../../components/home/home-routing.module';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})

export class HomeModule{

}
