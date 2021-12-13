import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component"
import { ProductsComponent } from "./components/products/products.component"
import { ContactComponent } from "./components/contact/contact.component"
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component"
import { DetailComponent } from "./components/detail/detail.component"

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "products/:id",
    component: DetailComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
