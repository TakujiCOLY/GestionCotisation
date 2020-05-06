import { Component, OnInit } from '@angular/core';
import { Pays } from '../models/pays';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss']
})
export class PaysComponent implements OnInit {
  public pays: Pays[];
  public paysAddForm: FormGroup;
  public paysSearchForm: FormGroup;
  public submittedAdd: Boolean;
  public submittedSearch: Boolean;
  public p = 1;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.paysAddForm = this.fb.group({
      id: [''],
      nom: ['', Validators.required]
    });
    this.paysSearchForm = this.fb.group({
      nom: ['', Validators.required]
    });
    this.submittedAdd = false;
    this.submittedSearch = false;
    this.getData();
  }

  public getData() {
    this.api.getPays().subscribe(data => {
      this.pays = data;
    });
  }

  get f() { return this.paysAddForm.controls; }

  get fSearch() { return this.paysSearchForm.controls; }

  addPays() {
    if (this.paysAddForm.invalid)
      return;
    let pays = new Pays();
    pays.nom = this.paysAddForm.value.nom;
    if (this.paysAddForm.value.id != '') {
      this.api.update(pays, '/payses/' + this.paysAddForm.value.id).subscribe(data => {
        alert('Le pays ' + data['nom'] + ' a été modifié avec succès');
        this.effacerChamps();
        this.getData();
      });
    } else {
      this.api.add(pays, '/payses').subscribe(data => {
        alert('Le pays ' + data['nom'] + ' a été ajouté avec succès');
        this.effacerChamps();
        this.getData();
      });
    }
  }

  searchPays() {
    this.submittedSearch = true;
    if (this.paysSearchForm.invalid)
      return;
    this.api.getPaySearch(this.paysSearchForm.value.nom).subscribe(data => {
      this.pays = data;
    });
  }

  getPays(pays: any) {
    this.paysAddForm.setValue({
      id: String(pays.id),
      nom: pays.nom
    });
  }

  effacerChamps() {
    this.paysAddForm.setValue({
      id: '',
      nom: ''
    });
    this.submittedAdd = false;
  }

}
