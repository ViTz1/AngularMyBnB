import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl:'./navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  nomeApplicazione = "MyAirbnb14";
  elencoLink =[
    {pathLink:"/home", nomeLink :"Home"},
    {pathLink:"/carrello", nomeLink :"Carrello"},
    {pathLink:"/ordini", nomeLink :"Ordini"},
    {pathLink:"/amministrazione", nomeLink :"Amministrazione"}
  ];
    

  constructor() { }

  ngOnInit(): void {
  }

}
