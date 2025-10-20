import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbitazioneListComponent } from './components/abitazione-list/abitazione-list.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OrdineListComponent } from './components/ordine-list/ordine-list.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'main', component: MainComponent,
    children:[
          {path:'', redirectTo:'abitazione-list', pathMatch:'full'},  
          {path:'abitazione-list', component: AbitazioneListComponent},
          {path:'ordine-list', component: OrdineListComponent},
          {path:'**', redirectTo: 'pagina-errore'}

        ]
  },
   {path:'**', redirectTo: 'pagina-errore'}
]


@NgModule({
  declarations: [
    AbitazioneListComponent,
    MainComponent,
    LoginComponent,
    OrdineListComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,    
    RouterModule.forChild(routes),
    // mi serve per le direttive angular per gestire i form di tipo template driven
  ],
  exports:[AbitazioneListComponent]
})
export class AmministrazioneModule { }
