import { Component, OnInit } from '@angular/core';
import { RegionP } from '../models/regionP';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Pays } from '../models/pays';
import { Region } from '../models/region';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  public regions: RegionP[];
  public pays: Pays[];
  public regionAddForm: FormGroup;
  public regionSearchForm: FormGroup;
  public submittedAdd: Boolean;
  public submittedSearch: Boolean;
  public p = 1;

  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regionAddForm = this.fb.group({
      id: [''],
      nom: ['', Validators.required],
      pays: ['', Validators.required]
    });
    this.regionSearchForm = this.fb.group({
      nom: [''],
      pays: ['']
    });
    this.submittedAdd = false;
    this.submittedSearch = false;
    this.getData();
    this.getPays();
  }

  public getData() {
    this.api.getRegions().subscribe(data => {
      this.regions = data;
    });
  }

  public getPays() {
    this.api.getPays().subscribe(data => {
      this.pays = data;
    });
  }

  get f() {
    return this.regionAddForm.controls;
  }

  public addRegion() {
    this.submittedAdd = true;
    if (this.regionAddForm.invalid)
      return;
    let region = new Region();
    region.nom = this.regionAddForm.value.nom;
    region.pays = '/pays/' + this.regionAddForm.value.pays;
    if (this.regionAddForm.value.id != '') {
      this.api.update(region, '/regions/' + this.regionAddForm.value.id).subscribe(data => {
        alert('La région ' + data['nom'] + ' a été modifiée avec succès');
        this.effacerChamps();
        this.getData();
      });
    } else {
      this.api.add(region, '/regions').subscribe(data => {
        alert('La région ' + data['nom'] + ' a été ajoutée avec succès');
        this.effacerChamps();
        this.getData();
      });
    }
  }

  public searchRegion() {
    if (this.regionSearchForm.value.nom == '' && this.regionSearchForm.value.pays == '') {
      this.submittedSearch = true;
      return;
    }
    this.api.getRegionSearch(this.regionSearchForm.value.nom, this.regionSearchForm.value.pays).subscribe(data => {
      this.regions = data;
    });
  }

  public getRegion(region: any) {
    this.regionAddForm.setValue({
      id: String(region.id),
      nom: region.nom,
      pays: String(region.pays.id)
    });
  }

  public effacerChamps() {
    this.regionAddForm.setValue({
      id: '',
      nom: '',
      pays: ''
    });
    this.submittedAdd = false;
  }

}
