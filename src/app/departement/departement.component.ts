import { Component, OnInit } from '@angular/core';
import { Pays } from '../models/pays';
import { RegionP } from '../models/regionP';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartementP } from '../models/departementP';
import { ApiService } from '../services/api.service';
import { Departement } from '../models/departement';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent implements OnInit {
  public pays: Pays[];
  public regions: RegionP[];
  public departements: DepartementP[];
  public departementAddForm: FormGroup;
  public departementSearchForm: FormGroup;
  public submittedAdd: Boolean;
  public submittedSearch: Boolean;
  public p = 1;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.departementAddForm = this.fb.group({
      id: [''],
      nom: ['', Validators.required],
      pays: ['', Validators.required],
      region: ['', Validators.required]
    });
    this.departementSearchForm = this.fb.group({
      nom: [''],
      region: [''],
      pays: ['']
    });
    this.submittedAdd = false;
    this.submittedSearch = false;
    this.getPays();
    this.getData();
  }

  public getData() {
    // this.api.getDepartement().subscribe(data => {
    //   this.departements = data;
    // });
  }

  public getPays() {
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

  public get f() {
    return this.departementAddForm.controls;
  }

  public addDepartement() {
    this.submittedAdd = true;
    if (this.departementAddForm.invalid)
      return;
    let departement = new Departement();
    departement.nom = this.departementAddForm.value.nom;
    departement.region = '/regions/' + this.departementAddForm.value.region;
    if (this.departementAddForm.value.id != '') {
      this.api.update(departement, '/departements/' + this.departementAddForm.value.id).subscribe(data => {
        alert('Le département ' + data['nom'] + ' a été modifié avec succès');
        this.getData();
        this.effacerChamps();
      });
    } else {
      this.api.add(departement, '/departements').subscribe(data => {
        alert('Le département ' + data['nom'] + ' a été ajouté avec succès');
        this.getData();
        this.effacerChamps();
      });
    }
  }

  public searchDepartement() {
    if (this.departementSearchForm.value.nom == '' && this.departementSearchForm.value.region == '') {
      this.submittedSearch = true;
      return;
    }
    // this.api.getDepartementSearch(this.departementSearchForm.value.nom, this.departementSearchForm.value.region).subscribe(data => {
    //   this.departements = data;
    // });

  }

  public getDepartement(departement: any) {
    this.api.getRegionSearch('', departement.region.pays.id).subscribe(data => {
      this.regions = data;
    });
    this.departementAddForm.setValue({
      id: String(departement.id),
      nom: departement.nom,
      pays: String(departement.region.pays.id),
      region: String(departement.region.id)
    });
  }

  public effacerChamps() {
    this.departementAddForm.setValue({
      id: '',
      nom: '',
      pays: '',
      region: ''
    });
    this.submittedAdd = false;
  }

}
