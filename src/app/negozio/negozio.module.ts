import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {  SommarioCarrelloComponent } from './components/sommario-carrello/sommario-carrello.component';
import { AppRoutingModule } from "src/app/app-routing.module";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CatalogoComponent,CheckoutComponent, SommarioCarrelloComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage
],
  exports :[CatalogoComponent,CheckoutComponent, SommarioCarrelloComponent]
})
export class NegozioModule { }
