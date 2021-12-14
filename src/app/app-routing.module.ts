import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from "./components/products/products.component"
import { ContactComponent } from "./components/contact/contact.component"
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component"
import { DetailComponent } from "./components/detail/detail.component"
import { LayoutComponent } from "./components/layout/layout.component"
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
      {
        path: "home",
        loadChildren: () => import("./components/home/home.module").then(m => m.HomeModule)
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
        path: "register",
        component: RegisterComponent
      },
      {
        path: "**",
        component: PageNotFoundComponent
      }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
