import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Membre } from '../models/membre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membre-add',
  templateUrl: './membre-add.component.html',
  styleUrls: ['./membre-add.component.scss']
})
export class MembreAddComponent implements OnInit {
  addMembreForm: FormGroup;
  submitted: boolean;
  maxDate = Date.now();

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addMembreForm = this.fb.group({
      
    });
    this.submitted = false;
  }

  get f() { return this.addMembreForm.controls; }

  addMembre() {
    this.submitted = true;
    if (this.addMembreForm.invalid) {
      return;
    }
    let membre = new Membre();
    
  }

  effacerChamps() {
    this.submitted = false;
    this.addMembreForm.setValue({
      
    });
  }

}
