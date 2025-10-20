import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './sommario-carrello.component.html',
  styleUrls: ['./sommario-carrello.component.css']
})
export class SommarioCarrelloComponent implements OnInit {

  constructor(public carrello : CarrelloService) { }

  ngOnInit(): void {
  }

  rimuoviDalCarrello(id: number){
    this.carrello.rimuovi(id);

  }

}
