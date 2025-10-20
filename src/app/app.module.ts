import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { PaginaErroreComponent } from './layout/components/pagina-errore/pagina-errore.component';
import { AmministrazioneModule } from './amministrazione/amministrazione.module';
import { NegozioModule } from './negozio/negozio.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PaginaErroreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NegozioModule,
    //AmministrazioneModule messo come lazy
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
