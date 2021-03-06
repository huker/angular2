import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from "app/product/product.component";
import {HomeComponent} from "./home/home.component";
import {Code404Component} from "./code404/code404.component";

const routes: Routes = [
  { path: '', redirectTo:'/home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'product/:id',component: ProductComponent},
  { path: '**',component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
