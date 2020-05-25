import { Component, OnInit } from '@angular/core';
import { Membre } from '../models/membre';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MembreP } from '../models/membreP';
import { MembreService } from '../services/membre.service';
import { ApiService } from '../services/api.service';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-membre-update',
  templateUrl: './membre-update.component.html',
  styleUrls: ['./membre-update.component.scss']
})
export class MembreUpdateComponent implements OnInit {
  public membre: MembreP;
  public categories: Categorie[];
  public membreSearchForm: FormGroup;
  public submitted: boolean;
  public maxDate = Date.now();

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private membreService: MembreService, private api: ApiService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getMembre();
    this.submitted = false;
  }

  getMembre() {
    let idCrypt = this.route.snapshot.params['id'];
    let id = atob(idCrypt);
    this.membreService.getById(id.split('.')[1]).subscribe(data => {
      this.membre = data;
      this.membreSearchForm = this.fb.group({
        id: [this.membre.id],
        nom: [this.membre.nom],
        prenom: [''],
        dateNaissance: [''],
        anneeAdhesion: [''],
        profession: [''],
        telephone: [''],
        mail: [''],
        lieuResidence: [''],
        categorie: ['']
      });
    });
  }

  getCategories() {
    this.api.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  get f() { return this.membreSearchForm.controls; }

  updateMembre() {
    this.submitted = true;
    if (this.membreSearchForm.invalid) {
      return;
    }
    let membre = new Membre();

  }

}
