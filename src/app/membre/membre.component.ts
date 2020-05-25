import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Membre } from '../models/membre';
import { MembreService } from '../services/membre.service';
import { ApiService } from '../services/api.service';
import { MembreP } from '../models/membreP';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.scss']
})
export class MembreComponent implements OnInit {
  public membres: MembreP[];
  public categories: Categorie[];
  public searchMembreForm: FormGroup;
  public submitted: Boolean;
  public p;

  constructor(private router: Router, private fb: FormBuilder, private membreService: MembreService, private api: ApiService) { }

  ngOnInit(): void {
    this.searchMembreForm = this.fb.group({
      nom: [''],
      prenom: [''],
      categorie: ['']
    });
    this.submitted = false;
    this.p = 1;
    this.getCategories();
    this.getData();
  }

  public getData() {
    this.membreService.getMembres().subscribe(data => {
      this.membres = data;
    });
  }

  public getCategories() {
    this.api.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  searchMembre() {
    if (this.searchMembreForm.value.nom == '' && this.searchMembreForm.value.prenom == '' && this.searchMembreForm.value.categorie == '') {
      this.submitted = true;
      return;
    }
    this.membreService.getMembreSearch(this.searchMembreForm.value.nom, this.searchMembreForm.value.prenom, this.searchMembreForm.value.categorie).subscribe(data => {
      this.membres = data;
    });
  }

  detailMembre(value: any) {
    this.router.navigate(['/membre-detail/', value.id]);
  }

  updateMembre(value: any) {
    this.router.navigate(['/membre-upd/', value.id]);
  }
}
