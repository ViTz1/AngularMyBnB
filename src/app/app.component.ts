import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // string
  title = 'myairbnb_14';
  // type script fa inference e capisce che è boolean
  isPausa =true;
  // array di stringhe
  nomi =["Mario", "Gino", "Pino","Enrica"];
  // array di allievi
  allievi =[
    {nome:"Mario",cognome:"Rossi",eta:19},
    {nome:"Marco",cognome:"Rosi",eta:15},
    {nome:"Maria",cognome:"Bossi",eta:22},
    {nome:"Marino",cognome:"Russo",eta:17}
  ]

}
