import { Component, OnInit } from '@angular/core';
import { StaticDatasourceService } from 'src/app/core/services/static-datasource.service';
import { Abitazione } from 'src/app/core/models/abitazione.model';

@Component({
  selector: 'app-abitazione-list',
  templateUrl: './abitazione-list.component.html',
  styleUrls: ['./abitazione-list.component.css']
})
export class AbitazioneListComponent implements OnInit {

  elencoAbitazioni: Abitazione[]=[];

  constructor(private datasource : StaticDatasourceService) {
    this.elencoAbitazioni = datasource.abitazioni;
   }

  ngOnInit(): void {
  }

}
