import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Membre } from '../models/membre';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-membre-add',
  templateUrl: './membre-add.component.html',
  styleUrls: ['./membre-add.component.scss']
})
export class MembreAddComponent implements OnInit {
  public membreAddForm: FormGroup;
  public categories: Categorie[];
  public submitted: boolean;
  public maxDate = Date.now();

  constructor(private router: Router, private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.membreAddForm = this.fb.group({
      nom: [''],
      prenom: [''],
      dateNaissance: [''],
      anneeAdhesion: [''],
      profession: [''],
      telephone: [''],
      mail: [''],
      lieuResidence: [''],
      categorie: ['']
    });
    this.submitted = false;
    this.getCategorie();
  }

  public getCategorie() {
    this.api.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  get f() { return this.membreAddForm.controls; }

  addMembre() {
    this.submitted = true;
    if (this.membreAddForm.invalid) {
      return;
    }
    let membre = new Membre();
    membre.nom = this.membreAddForm.value.nom;
    membre.prenom = this.membreAddForm.value.prenom;
    membre.dateNaissance = this.membreAddForm.value.dateNaissance;
    membre.anneeAdhesion = this.membreAddForm.value.anneeAdhesion;
    membre.profession = this.membreAddForm.value.profession;
    membre.telephone = this.membreAddForm.value.telephone;
    membre.mail = this.membreAddForm.value.mail;
    membre.lieuResidence = this.membreAddForm.value.lieuResidence;
    membre.categorie = '/categories/' + this.membreAddForm.value.categorie;
    this.api.add(membre, '/membres').subscribe(data => {
      alert('Le membre ' + data['prenom'] + ' ' + data['nom'] + ' a été ajouté avec succès');
      this.router.navigate(['/membre-detail/', data['id']]);
    }),
      err => {
        alert('Erreur d\'ajout du membre ' + membre.prenom + ' ' + membre.nom);
      };
  }
}
