import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public titreApp;
  public nomAssociation;
  public annee;

  constructor() { }

  ngOnInit(): void {
    this.titreApp = "Gestion des cotisations";
    this.nomAssociation = "Etoile";
    this.annee = Date.now();
  }

}
