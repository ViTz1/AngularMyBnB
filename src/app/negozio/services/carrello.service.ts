import { Injectable } from '@angular/core';
import { Abitazione } from 'src/app/core/models/abitazione.model';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  private _listaAbitazioni: Abitazione[] =[];

  constructor() { }

  aggiungi(oggetto: Abitazione): string {
    // if(oggetto != null)
    let messaggio='';
    let abitazione = this._listaAbitazioni
          .find(abitazione => oggetto.id === abitazione.id);
    if (abitazione != null) {
      messaggio = `Esiste già l'abitazione ${abitazione.nome} nel carrello, non verrà aggiunta`;
      
    }
    else {
      this._listaAbitazioni.push(oggetto);
    }
    return messaggio;
  }

  get totale(){
     const risultato = this._listaAbitazioni.reduce(
      (totale, elemento) => totale + elemento.prezzo, 0);
    return risultato;
  }

  get totaleAbitazioni(){
    return this._listaAbitazioni.length;
  }

  get listaAbitazioni():Abitazione[] {

// return this._listaAbitazioni;
     return [...this._listaAbitazioni];
  }

  rimuovi(id: number){
    let indice =this._listaAbitazioni.findIndex(el => el.id=== id);
    this._listaAbitazioni.splice(indice,1);
  }


}
