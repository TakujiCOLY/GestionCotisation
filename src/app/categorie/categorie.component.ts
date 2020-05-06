import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, Form } from '@angular/forms';
import { Categorie } from '../models/categorie';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  public categorieAddForm: FormGroup;
  public categorieSearchForm: FormGroup;
  public submittedAdd: Boolean;
  public submittedSearch: Boolean;
  p = 1;
  public categories: Categorie[];

  constructor(private router: Router, private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.categorieAddForm = this.fb.group({
      id: [''],
      nom: ['', Validators.required]
    });
    this.categorieSearchForm = this.fb.group({
      nom: ['', Validators.required]
    });
    this.submittedAdd = false;
    this.submittedSearch = false;
    this.getData();
  }

  getData() {
    this.api.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  get f() { return this.categorieAddForm.controls; }

  get fSearch() { return this.categorieSearchForm.controls; }

  addCategorie() {
    this.submittedAdd = true;
    if (this.categorieAddForm.invalid) {
      return;
    }
    let categorie = new Categorie();
    categorie.nom = this.categorieAddForm.value.nom;
    if (this.categorieAddForm.value.id != '') {
      this.api.update(categorie, '/categories/' + this.categorieAddForm.value.id).subscribe(data => {
        alert('La catégorie ' + data['nom'] + ' a été modifiée avec succès');
        this.getData();
        this.effacerChamps();
      });
    } else {
      this.api.add(categorie, '/categories').subscribe(data => {
        alert('La catégorie ' + data['nom'] + ' a été ajoutée avec succès');
        this.getData();
        this.effacerChamps();
      });
    }
  }

  searchCategorie() {
    this.submittedSearch = true;
    if (this.categorieSearchForm.invalid)
      return;
    this.api.getCategorieSearch(this.categorieSearchForm.value.nom).subscribe(data => {
      this.categories = data;
    });
  }

  getCategorie(categorie: any) {
    this.categorieAddForm.setValue({
      id: String(categorie.id),
      nom: categorie.nom
    });
  }

  effacerChamps() {
    this.categorieAddForm.setValue({
      id: '',
      nom: ''
    });
    this.submittedAdd = false;
  }
}
