import { Injectable } from '@angular/core';
import { Abitazione } from '../models/abitazione.model';

@Injectable({
  providedIn: 'root'
})
export class StaticDatasourceService {

  private _elencoAbitazioni: Abitazione[] = [
      //new Abitazione(1, "Casa fiorita", "Bella casa accogliente con fiori", 85, "Novara"),
      { id:1, nome: "Casa fiorita", 
        descrizione: "Bella casa accogliente con fiori", 
        prezzo: 85, 
        citta: "Novara",
        urlImage:"casa_fiorita.png" },
      
      { id: 2, nome: "Casa artistica", descrizione: "Bella casa con quadri", prezzo: 75, citta: "Alessandria", urlImage:"casa_artistica.jpg" },
      { id: 3, nome: "Casa colorata", descrizione: "Bella casa con mille colori", prezzo: 68, citta: "Torino" },
      { id: 4, nome: "Villa Aurora", descrizione: "Villa d'epoca", prezzo: 135, citta: "Aosta" },
      { id: 5, nome: "Villa Clotilde", descrizione: "Villa del 900", prezzo: 155, citta: "Asti" },
    ]

    get abitazioni(): Abitazione[] {
      return this._elencoAbitazioni;
    }


  constructor() { }
}
