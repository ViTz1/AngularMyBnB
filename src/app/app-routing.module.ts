import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './negozio/components/catalogo/catalogo.component';
import { SommarioCarrelloComponent } from './negozio/components/sommario-carrello/sommario-carrello.component';
import { OrdineListComponent } from './amministrazione/components/ordine-list/ordine-list.component';
import { LoginComponent } from './amministrazione/components/login/login.component';
import { PaginaErroreComponent } from './layout/components/pagina-errore/pagina-errore.component';
import { AbitazioneListComponent } from './amministrazione/components/abitazione-list/abitazione-list.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:CatalogoComponent},
  {path:'carrello', component:SommarioCarrelloComponent},
  {path:'ordini', component:OrdineListComponent},
  {path:'login', component:LoginComponent},
  //{path:'amministrazione/abitazione-list', component:AbitazioneListComponent},
  // caricamento lazy del modulo amministrazione
  {path:'amministrazione', 
    loadChildren:() => import('./amministrazione/amministrazione.module')
      .then(m => m.AmministrazioneModule)
    },
  {path:'pagina-errore', component:PaginaErroreComponent},
  {path:'**', redirectTo: 'pagina-errore'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
