import { Component, OnInit } from '@angular/core';
import { Abitazione } from '../../../core/models/abitazione.model';
import { StaticDatasourceService } from '../../../core/services/static-datasource.service';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  elencoAbitazioni: Abitazione[] =[];

  // messaggio da visualizzare in casi vari
  messaggio = "";
  // contiene le abitazioni che l'utente ha scelto
 // carrello: Abitazione[] = [];

  
  /*nel costruttore passo un parametro private di tipo StaticDatasourceService
  typescript creerà un capo di istanza corrspettivo
  Angular poichè StaticDatasourceService è un servizio @Injectable
  crea l'oggetto come Singleton e ne passa il riferimento alla variabile
  come se ANgulaer facesse
  dataSource =  new StaticDatasourceService();
  Dependency Injection 

  */
  constructor(private dataSource : StaticDatasourceService,
    public carrello : CarrelloService ){
    this.elencoAbitazioni = dataSource.abitazioni;
  }




  aggiungiAlCarrello(oggetto: Abitazione): void {
   // il metodo aggiungi del carrello restituisce una stringa
   // eventuale messaggio di dato già presente
    this.messaggio =  this.carrello.aggiungi(oggetto);
  }

  // metodo che calcola il totale del carrello
  /*get TotaleCarrello(): number {
    return this.carrello.totale;
  }*/
/*
  get totaleElementiCarrello(){
    return this.carrello.totaleAbitazioni;
  }
*/

  /*let risultato=0;
  for(let i=0; i<this.carrello.length; i++)
  { 
    risultato += this.carrello[i].prezzo;
  }
  return risultato;
*/
}



