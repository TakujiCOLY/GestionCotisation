import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CotisationAnnuelle } from '../models/cotisationAnnuelle';
import { ApiService } from '../services/api.service';
import { Categorie } from '../models/categorie';
import { PromoteurCotisation } from '../models/promoteurCotisation';

@Component({
  selector: 'app-cotisation-annuelle',
  templateUrl: './cotisation-annuelle.component.html',
  styleUrls: ['./cotisation-annuelle.component.scss']
})
export class CotisationAnnuelleComponent implements OnInit {
  public cotisationAddForm: FormGroup;
  public cotisationSearchForm: FormGroup;
  public submittedAdd: Boolean;
  public submittedSearch: Boolean;
  public cotisationAnnuelles: any;
  public categories: Categorie[];
  public promoteurs: PromoteurCotisation[];
  p = 1;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.cotisationAddForm = this.fb.group({
      id: [''],
      libelle: ['', Validators.required],
      montant: ['', Validators.required],
      donMateriel: ['', Validators.required],
      annee: ['', Validators.required],
      categorie: ['', Validators.required],
      promoteur: ['', Validators.required]
    });
    this.cotisationSearchForm = this.fb.group({
      annee: [''],
      categorie: [''],
      promoteur: ['']
    });
    this.submittedAdd = false;
    this.submittedSearch = false;
    this.getCategorie();
    this.getPromoteurs();
    this.getData();
  }

  getCategorie() {
    this.api.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  getPromoteurs() {
    this.api.getPromoteurs().subscribe(data => {
      this.promoteurs = data;
    });
  }

  getData() {
    this.api.getCotisationAnnuelles().subscribe(data => {
      this.cotisationAnnuelles = data;
    });
  }

  get f() { return this.cotisationAddForm.controls; }

  addCotisation() {
    this.submittedAdd = true;
    if (this.cotisationAddForm.invalid)
      return;
    let cotisationAnnuelle = new CotisationAnnuelle();
    cotisationAnnuelle.annee = this.cotisationAddForm.value.annee;
    cotisationAnnuelle.libelle = this.cotisationAddForm.value.libelle;
    cotisationAnnuelle.montant = parseInt(this.cotisationAddForm.value.montant);
    cotisationAnnuelle.donMateriel = Boolean(this.cotisationAddForm.value.donMateriel);
    cotisationAnnuelle.categorie = '/categories/' + this.cotisationAddForm.value.categorie;
    cotisationAnnuelle.promoteurCotisation = '/promoteurCotisations/' + this.cotisationAddForm.value.promoteur;
    if (this.cotisationAddForm.value.id != '') {
      this.api.update(cotisationAnnuelle, '/cotisationAnnuelles/' + this.cotisationAddForm.value.id).subscribe(data => {
        alert('La cotisation annuelle ' + data['libelle'] + ' a été modifiée avec succès');
        this.getData();
        this.effacerChamps();
      });
    } else {
      this.api.add(cotisationAnnuelle, '/cotisationAnnuelles').subscribe(data => {
        alert('La cotisation annuelle ' + data['libelle'] + ' a été ajoutée avec succès');
        this.getData();
        this.effacerChamps();
      });
    }
  }

  getCotisation(cotisation: any) {
    this.cotisationAddForm.setValue({
      id: String(cotisation.id),
      libelle: cotisation.libelle,
      annee: cotisation.annee,
      montant: String(cotisation.montant),
      donMateriel: String(cotisation.donMateriel),
      categorie: String(cotisation.categorie.id),
      promoteur: String(cotisation.promoteurCotisation.id)
    });
  }

  searchCotisation() {
    if (this.cotisationSearchForm.value.annee == '' && this.cotisationSearchForm.value.categorie == '' && this.cotisationSearchForm.value.promoteur == '') {
      this.submittedSearch = true;
      return;
    }
    this.api.getCotisationAnnuelleSearch(this.cotisationSearchForm.value.annee, this.cotisationSearchForm.value.categorie, this.cotisationSearchForm.value.promoteur).subscribe(data => {
      this.cotisationAnnuelles = data;
    });
  }

  effacerChamps() {
    this.cotisationAddForm.setValue({
      id: '',
      libelle: '',
      annee: '',
      montant: '',
      don_materiel: '',
      categorie: '',
      promoteur: ''
    });
    this.submittedAdd = false;
  }
}
