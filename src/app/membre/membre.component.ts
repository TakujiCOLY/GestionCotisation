import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Membre } from '../models/membre';
import { MembreService } from '../services/membre.service';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.scss']
})
export class MembreComponent implements OnInit {
  
  searchMembreForm: FormGroup;
  

  constructor(private router: Router, private fb: FormBuilder, private membreService: MembreService) { }

  ngOnInit(): void {
    this.searchMembreForm = this.fb.group({
      nom: [''],
      prenom: [''],
      annee_adhesion: [''],
      profession: [''],
      quartier: ['']
    });
    this.membreService.get('/membres').subscribe(data => {
      console.log(data);
    });
  }

  searchMembre() {
    
  }
}
