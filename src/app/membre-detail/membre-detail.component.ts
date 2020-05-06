import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membre-detail',
  templateUrl: './membre-detail.component.html',
  styleUrls: ['./membre-detail.component.scss']
})
export class MembreDetailComponent implements OnInit {
  p: number = 1;
  cotisations = [
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
    { montant: 1585, don: "Néant", date: "12-12-2020" },
  ];
  cotisationAnnuelles = [
    {annee: 2020, montantAnnuel: 10000, montantCotise: 5000, montantRestant: 5000},
    {annee: 2020, montantAnnuel: 10000, montantCotise: 3000, montantRestant: 2000},
    {annee: 2020, montantAnnuel: 10000, montantCotise: 5000, montantRestant: 5000},
    {annee: 2020, montantAnnuel: 10000, montantCotise: 5000, montantRestant: 5000},
    {annee: 2020, montantAnnuel: 10000, montantCotise: 5000, montantRestant: 5000},
    {annee: 2020, montantAnnuel: 10000, montantCotise: 5000, montantRestant: 5000},
    {annee: 2020, montantAnnuel: 10000, montantCotise: 5000, montantRestant: 5000},
    {annee: 2020, montantAnnuel: 10000, montantCotise: 5000, montantRestant: 5000},
    {annee: 2020, montantAnnuel: 10000, montantCotise: 5000, montantRestant: 5000},
    {annee: 2020, montantAnnuel: 10000, montantCotise: 5000, montantRestant: 5000},
    {annee: 2020, montantAnnuel: 10000, montantCotise: 5000, montantRestant: 5000},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
