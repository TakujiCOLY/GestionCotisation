import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Membre } from '../models/membre';
import { MembreService } from '../services/membre.service';
import { ApiService } from '../services/api.service';
import { MembreP } from '../models/membreP';
import { Categorie } from '../models/categorie';
import { RegionP } from '../models/regionP';
import { Pays } from '../models/pays';

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
  public annees: String[];
  public pays: Pays[];
  public regions: RegionP[];
  public p;

  constructor(private router: Router, private fb: FormBuilder, private membreService: MembreService, private api: ApiService) { }

  ngOnInit(): void {
    this.searchMembreForm = this.fb.group({
      nom: [''],
      prenom: [''],
      categorie: [''],
      anneeAdhesion: [''],
      pays: [''],
      region: ['']
    });
    this.submitted = false;
    this.p = 1;
    this.getData();
  }

  public getData() {
    this.api.getCategories().subscribe(data => {
      this.categories = data;
    });
    this.api.getPays().subscribe(data => {
      this.pays = data;
    });
    this.membreService.getAnneeAdhesions().subscribe(data => {
      this.annees = data;
    });
  }

  searchMembre() {
    if (this.searchMembreForm.value.nom == '' && this.searchMembreForm.value.prenom == '' && this.searchMembreForm.value.categorie == '' && this.searchMembreForm.value.anneeAdhesion == '' && this.searchMembreForm.value.pays == '' && this.searchMembreForm.value.region == '') {
      this.submitted = true;
      return;
    }
    let membre = { nom: String, prenom: String, anneeAdhesion: String, categorie: String, pays: String, region: String };
    membre.nom = this.searchMembreForm.value.nom;
    membre.prenom = this.searchMembreForm.value.prenom;
    membre.anneeAdhesion = this.searchMembreForm.value.anneeAdhesion;
    membre.categorie = this.searchMembreForm.value.categorie;
    membre.pays = this.searchMembreForm.value.pays;
    membre.region = this.searchMembreForm.value.region;
    this.membreService.getMembreSearch(membre).subscribe(data => {
      this.membres = data;
    });
  }

  getRegions(event: any) {
    this.api.getRegionSearch('', event).subscribe(data => {
      this.regions = data;
    });
  }

  detailMembre(value: any) {
    this.router.navigate(['/membre-detail/', value.id]);
  }

  updateMembre(value: any) {
    this.router.navigate(['/membre-upd/', value.id]);
  }
}
