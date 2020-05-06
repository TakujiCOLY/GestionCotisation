import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Cotisation } from '../models/cotisation';

@Component({
  selector: 'app-cotisation',
  templateUrl: './cotisation.component.html',
  styleUrls: ['./cotisation.component.scss']
})
export class CotisationComponent implements OnInit {
  private cotisationForm: FormGroup;
  private submitted: Boolean;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cotisationForm = this.fb.group({
      montant: [''],
      detail_don_materiel: [''],
      date_cotisation: [''],
      membre_id: [''],
      cotisation_annuelle_id: ['']
    });
    this.submitted = false;
  }

  get f() { return this.cotisationForm.controls; }

  addCotisation() {
    this.submitted = true;
    if (this.cotisationForm.invalid)
      return;
    let cotisation = new Cotisation();
    
  }

  effacerChamps() {
    this.cotisationForm.setValue({
      montant: '',
      detail_don_materiel: '',
      date_cotisation: '',
      membre_id: '',
      cotisation_annuelle_id: ''
    });
    this.submitted = false;
  }

}
