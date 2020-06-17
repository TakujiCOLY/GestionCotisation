import { Component, OnInit } from '@angular/core';
import { Membre } from '../models/membre';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MembreService } from '../services/membre.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MembreP } from '../models/membreP';
import { Categorie } from '../models/categorie';
import { ApiService } from '../services/api.service';
import { Pays } from '../models/pays';
import { RegionP } from '../models/regionP';

@Component({
  selector: 'app-membre-up',
  templateUrl: './membre-up.component.html',
  styleUrls: ['./membre-up.component.scss']
})
export class MembreUpComponent implements OnInit {
  public membre: MembreP;
  public membreForm: FormGroup;
  public submitted: Boolean;
  public categories: Categorie[];
  public pays: Pays[];
  public regions: RegionP[];
  public maxDate = Date.now();

  constructor(private fb: FormBuilder, private membreApi: MembreService, private api: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
    this.submitted = false;
  }

  getData() {
    let id = this.route.snapshot.params['id'];
    this.membreApi.getById(id).subscribe(data => {
      this.membre = data;
      this.initiateForm(this.membre);
    });
    this.api.getCategories().subscribe(data => {
      this.categories = data;
    });
    this.api.getPays().subscribe(data => {
      this.pays = data;
    });
  }

  public getRegions(event: string) {
    this.api.getRegionSearch('', event).subscribe(data => {
      this.regions = data;
    });
  }

  initiateForm(membre: any) {
    this.api.getRegionSearch('', membre.region.pays.nom).subscribe(data => {
      this.regions = data;
    });
    this.membreForm = this.fb.group({
      id: [membre.id],
      prenom: [membre.prenom, Validators.required],
      nom: [membre.nom, Validators.required],
      dateNaissance: [membre.dateNaissance, Validators.required],
      anneeAdhesion: [membre.anneeAdhesion, Validators.required],
      profession: [membre.profession, Validators.required],
      telephone: [membre.telephone, Validators.required],
      mail: [membre.mail],
      lieuResidence: [membre.lieuResidence, Validators.required],
      quartierOrigine: [membre.quartierOrigine, Validators.required],
      concession: [membre.concession, Validators.required],
      categorie: [membre.categorie.id, Validators.required],
      pays: [membre.region.pays.nom, Validators.required],
      region: [membre.region.id, Validators.required]
    });
  }

  get f() { return this.membreForm.controls; }

  updateMembre() {
    if (this.membreForm.invalid)
      return;
    let membreUpd = new Membre();
    membreUpd.nom = this.membreForm.value.nom;
    membreUpd.prenom = this.membreForm.value.prenom;
    membreUpd.dateNaissance = this.membreForm.value.dateNaissance;
    membreUpd.anneeAdhesion = this.membreForm.value.anneeAdhesion;
    membreUpd.profession = this.membreForm.value.profession;
    membreUpd.telephone = this.membreForm.value.telephone;
    membreUpd.mail = this.membreForm.value.mail;
    membreUpd.lieuResidence = this.membreForm.value.lieuResidence;
    membreUpd.quartierOrigine = this.membreForm.value.quartierOrigine;
    membreUpd.concession = this.membreForm.value.concession;
    membreUpd.categorie = '/categories/' + this.membreForm.value.categorie;
    membreUpd.region = '/regions/' + this.membreForm.value.region;
    this.membreApi.update(membreUpd, '/membres/' + this.membreForm.value.id).subscribe(data => {
      alert('Le membre ' + data['prenom'] + ' ' + data['nom'] + ' a été modifié avec succès');
      this.router.navigate(['/membre-detail/', data['id']]);
    }),
    err => {
      alert('Erreur de modification du membre ' + membreUpd.prenom + ' ' + membreUpd.nom);
    };;
  }

}
