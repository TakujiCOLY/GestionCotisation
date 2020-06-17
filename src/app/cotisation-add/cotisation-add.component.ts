import { Component, OnInit } from '@angular/core';
import { MembreP } from '../models/membreP';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MembreService } from '../services/membre.service';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PromoteurCotisation } from '../models/promoteurCotisation';
import { CotisationAnnuelleP } from '../models/cotisationAnnuelleP';
import { Cotisation } from '../models/cotisation';

@Component({
  selector: 'app-cotisation-add',
  templateUrl: './cotisation-add.component.html',
  styleUrls: ['./cotisation-add.component.scss']
})
export class CotisationAddComponent implements OnInit {
  public membre: MembreP;
  public cotisationForm: FormGroup;
  public submitted: boolean;
  public promoteurs: PromoteurCotisation[];
  public annees: String[];
  public cotisationAnnuelle: CotisationAnnuelleP[];
  public maxDate = Date.now();

  constructor(private apiMembre: MembreService, private api: ApiService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.getData(id);
    this.cotisationForm = this.fb.group({
      montant: [''],
      detail_don_materiel: [''],
      date_cotisation: ['', Validators.required],
      annee: ['', Validators.required],
      promoteur: ['', Validators.required],
      categorie: ['']
    });
    this.submitted = false;
  }

  getData(id) {
    this.apiMembre.getById(id).subscribe(data => {
      this.membre = data;
    });
    this.api.getPromoteurs().subscribe(data => {
      this.promoteurs = data;
    });
    this.api.getCotisationAnnuellesAnnees().subscribe(data => {
      this.annees = data;
    });
  }

  get f() { return this.cotisationForm.controls; }

  addCotisation() {
    this.submitted = true;
    if (this.cotisationForm.invalid)
      return;
    if (this.cotisationForm.value.montant == '' && this.cotisationForm.value.detail_don_materiel == '')
      return;
    let cotisation = new Cotisation();
    cotisation.montant = this.cotisationForm.value.montant;
    cotisation.detailDonMateriel = this.cotisationForm.value.detail_don_materiel;
    cotisation.dateCotisation = new Date(this.cotisationForm.value.date_cotisation);
    cotisation.cotisationAnnuelle = '/cotisationAnnuelles/' + this.cotisationAnnuelle[0].id;
    cotisation.membre = '/membres/' + this.membre.id;
    this.api.add(cotisation, '/cotisations').subscribe(data => {
      alert('Cotisation ajoutée avec succès');
      this.router.navigate(['/membre-detail/', this.membre.id]);
    });
  }

  getCotisation(event: any) {
    if (event != "" && this.cotisationForm.value.annee != "") {
      this.api.getCotisationAnnuelleSearch(this.cotisationForm.value.annee, String(this.membre.categorie.nom), event)
        .subscribe(data => {
          this.cotisationAnnuelle = data;
        });
    }
  }

}
