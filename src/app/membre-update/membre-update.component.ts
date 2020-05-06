import { Component, OnInit } from '@angular/core';
import { Membre } from '../models/membre';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membre-update',
  templateUrl: './membre-update.component.html',
  styleUrls: ['./membre-update.component.scss']
})
export class MembreUpdateComponent implements OnInit {
  updateMembreForm: FormGroup;
  submitted: boolean;
  maxDate = Date.now();

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updateMembreForm = this.fb.group({
     
    });
    this.submitted = false;
  }

  updateMembre() {
    this.submitted = true;
    if (this.updateMembreForm.invalid) {
      return;
    }
    let membre = new Membre();
    
  }

}
