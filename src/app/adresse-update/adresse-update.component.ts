import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pays } from '../models/pays';
import { RegionP } from '../models/regionP';
import { DepartementP } from '../models/departementP';
import { AdresseP } from '../models/adresseP';
import { MembreP } from '../models/membreP';
import { ApiService } from '../services/api.service';
import { MembreService } from '../services/membre.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Adresse } from '../models/adresse';

@Component({
  selector: 'app-adresse-update',
  templateUrl: './adresse-update.component.html',
  styleUrls: ['./adresse-update.component.scss']
})
export class AdresseUpdateComponent implements OnInit {
  public adresse: AdresseP;
  public adresseForm: FormGroup;
  public submitted: boolean;
  public pays: Pays[];
  public regions: RegionP[];
  public departements: DepartementP[];
  public membre: MembreP;

  constructor(private api: ApiService, private membreApi: MembreService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getData();
    this.submitted = false;
    this.initiateForm(this.adresse);
  }

  public getData() {
    let id = this.route.snapshot.params['id'];
    let idAdr = this.route.snapshot.params['id_adr'];
    // this.api.getAdresseUnique(idAdr).subscribe(data => {
    //   this.adresse = data;
    //   this.getPays();
    // this.getRegions(this.adresse);
    // this.getDepartements(this.adresse);
    // this.initiateForm(this.adresse);
    // });
    this.membreApi.getById(id).subscribe(data => {
      this.membre = data;
    });
  }

  initiateForm(adresse: AdresseP) {
    this.adresseForm = this.fb.group({
      id: [adresse.id],
      quartier: [adresse.quartierOrigine, Validators.required],
      concession: [adresse.concession, Validators.required],
      departement: [adresse.departement.id, Validators.required],
      region: [adresse.departement.region.nom, Validators.required],
      pays: [adresse.departement.region.pays.nom, Validators.required]
    });
  }

  public getPays() {
    this.api.getPays().subscribe(data => {
      this.pays = data;
    });
  }

  public getRegions(adresse: AdresseP) {
    this.api.getRegionSearch('', String(adresse.departement.region.pays.nom)).subscribe(data => {
      this.regions = data;
    });
  }

  public getDepartements(adresse: AdresseP) {
    // this.api.getDepartementSearch('', String(adresse.departement.region.nom)).subscribe(data => {
    //   this.departements = data;
    // });
  }

  public getRegion(event: any) {
    if (event.target.value != "") {
      this.api.getRegionSearch('', event.target.value).subscribe(data => {
        this.regions = data;
      });
    }
  }

  public getDepartement(event: any) {
    if (event.target.value != "") {
      // this.api.getDepartementSearch('', event.target.value).subscribe(data => {
      //   this.departements = data;
      // });
    }
  }

  get f() {
    return this.adresseForm.controls;
  }

  public updateAdresse() {
    if (this.adresseForm.invalid)
      return;
    let adresseUpd = new Adresse();
    adresseUpd.quartierOrigine = this.adresseForm.value.quartier;
    adresseUpd.concession = this.adresseForm.value.concession;
    adresseUpd.departement = '/departements/' + this.adresseForm.value.departement;
    adresseUpd.membre = '/membres/' + this.membre.id;
    this.api.update(adresseUpd, '/adresses/' + this.adresseForm.value.id).subscribe(data => {
      alert('L\'adresse de ' + this.membre.prenom+' ' + this.membre.nom + ' a été modifié avec succès');
      this.router.navigate(['/membre-detail/', this.membre.id]);
    });
  }

}
