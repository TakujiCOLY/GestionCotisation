import { Component, OnInit } from '@angular/core';
import { MembreService } from '../services/membre.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MembreP } from '../models/membreP';
import { Pays } from '../models/pays';
import { RegionP } from '../models/regionP';
import { DepartementP } from '../models/departementP';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Adresse } from '../models/adresse';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.scss']
})
export class AdresseComponent implements OnInit {
  public membre: MembreP;
  public pays: Pays[];
  public regions: RegionP[];
  public departements: DepartementP[];
  public submitted: boolean;  
  public adresseForm: FormGroup;

  constructor(private router: Router, private membreService: MembreService, private api: ApiService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getData();
    this.adresseForm = this.fb.group({
      quartier: ['', Validators.required],
      concession: ['', Validators.required],
      departement: ['', Validators.required],
      region: ['', Validators.required],
      pays: ['', Validators.required]
    });
    this.submitted = false;
  }

  getData() {
    let id = this.route.snapshot.params['id'];
    this.membreService.getById(id).subscribe(data => {
      this.membre = data;
    });
    this.api.getPays().subscribe(data => {
      this.pays = data;
    });
  }

  public getRegion(event: any) {
    if (event.target.value != "") {
      this.api.getRegionSearch('', event.target.value).subscribe(data => {
        this.regions = data;
      });
    }
  }

  public getDepartement(event: any) {
    if (event.target.value != '') {
      this.api.getDepartementSearch('', event.target.value).subscribe(data => {
        this.departements = data;
      });
    }
  }

  addAdresse() {
    if (this.adresseForm.invalid)
      return;
    let adresse = new Adresse();
    adresse.quartierOrigine = this.adresseForm.value.quartier;
    adresse.concession = this.adresseForm.value.concession;
    adresse.departement = '/departements/'+this.adresseForm.value.departement;
    this.api.add(adresse, '/adresses/').subscribe(data => {
      alert('Adresse ajouté avec succès');
      this.router.navigate(['/membre-detail/', this.membre.id]);
    });
  }

}
