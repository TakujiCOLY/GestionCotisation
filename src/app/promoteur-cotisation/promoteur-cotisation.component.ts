import { Component, OnInit } from '@angular/core';
import { PromoteurCotisation } from '../models/promoteurCotisation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-promoteur-cotisation',
  templateUrl: './promoteur-cotisation.component.html',
  styleUrls: ['./promoteur-cotisation.component.scss']
})
export class PromoteurCotisationComponent implements OnInit {
  public promoteurs: PromoteurCotisation[];
  public promoteurAddForm: FormGroup;
  public promoteurSearchForm: FormGroup;
  public submittedAdd: Boolean;
  public submittedSearch: Boolean;
  public p = 1;

  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.promoteurAddForm = this.fb.group({
      id: [''],
      nom: ['', Validators.required],
      lieu: ['', Validators.required],
      siege: ['', Validators.required]
    });
    this.promoteurSearchForm = this.fb.group({
      nom: [''],
      lieu: [''],
      siege: ['']
    });
    this.submittedAdd = false;
    this.submittedSearch = false;
    this.getData();
  }

  getData() {
    this.api.getPromoteurs().subscribe(data => {
      this.promoteurs = data;
    });
  }

  public get f() {return this.promoteurAddForm.controls;}

  addPromoteur() {
    this.submittedAdd = true;
    if (this.promoteurAddForm.invalid)
      return;
    let promoteur = new PromoteurCotisation();
    promoteur.nom = this.promoteurAddForm.value.nom;
    promoteur.lieu = this.promoteurAddForm.value.lieu;
    promoteur.siege = this.promoteurAddForm.value.siege;
    if (this.promoteurAddForm.value.id != '') {
      this.api.update(promoteur, '/promoteurCotisations/'+this.promoteurAddForm.value.id).subscribe(data => {
        alert('Le promoteur '+data['nom']+' a été modifié avec succès');
        this.getData();
        this.effacerChamps();
      });
    } else {
      this.api.add(promoteur, '/promoteurCotisations').subscribe(data => {
        alert('Le promoteur '+data['nom']+' a été ajouté avec succès');
        this.getData();
        this.effacerChamps();
      });
    }
  }

  searchPromoteur() {
    if (this.promoteurSearchForm.value.nom == '' && this.promoteurSearchForm.value.lieu == '' && this.promoteurSearchForm.value.siege == '') {
      this.submittedSearch = true;
      return;
    }
    this.api.getPromoteurSearch(this.promoteurSearchForm.value.nom, this.promoteurSearchForm.value.lieu, this.promoteurSearchForm.value.siege).subscribe(data => {
      this.promoteurs = data;
    });
  }

  getPromoteur(promoteur: any) {
    this.promoteurAddForm.setValue({
      id: String(promoteur.id),
      nom: promoteur.nom,
      lieu: promoteur.lieu,
      siege: promoteur.siege
    });
  }

  public effacerChamps() {
    this.promoteurAddForm.setValue({
      id: '',
      nom: '',
      lieu: '',
      siege: ''
    });
    this.submittedAdd = false;
  }

}
