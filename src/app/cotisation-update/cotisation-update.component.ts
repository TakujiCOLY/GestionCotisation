import { Component, OnInit } from '@angular/core';
import { MembreP } from '../models/membreP';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PromoteurCotisation } from '../models/promoteurCotisation';
import { CotisationAnnuelleP } from '../models/cotisationAnnuelleP';
import { MembreService } from '../services/membre.service';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CotisationService } from '../services/cotisation.service';
import { CotisationP } from '../models/cotisationP';
import { Cotisation } from '../models/cotisation';

@Component({
  selector: 'app-cotisation-update',
  templateUrl: './cotisation-update.component.html',
  styleUrls: ['./cotisation-update.component.scss']
})
export class CotisationUpdateComponent implements OnInit {
  public membre: MembreP;
  public cotisationForm: FormGroup;
  public submitted: boolean;
  public promoteurs: PromoteurCotisation[];
  public annees: String[];
  public cotisationAnnuelle: CotisationAnnuelleP[];
  public maxDate = Date.now();
  public cotisation: CotisationP;

  constructor(private apiMembre: MembreService, private apiCotisation: CotisationService, private api: ApiService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let idMembre = this.route.snapshot.params['id'];
    let idCot = this.route.snapshot.params['id_cot'];
    this.getData(idMembre, idCot);
    this.submitted = false;
  }

  getData(id, idCot) {
    this.apiMembre.getById(id).subscribe(data => {
      this.membre = data;
    });
    this.api.getPromoteurs().subscribe(data => {
      this.promoteurs = data;
    });
    this.api.getCotisationAnnuellesAnnees().subscribe(data => {
      this.annees = data;
    });
    this.apiCotisation.getCotisationUnique(idCot).subscribe(data => {
      this.cotisation = data;
      this.getInitiatedForm(this.cotisation);
    });
  }

  getInitiatedForm(cotisation: any) {
    this.cotisationForm = this.fb.group({
      montant: [cotisation.montant],
      detail_don_materiel: [cotisation.detailDonMateriel],
      date_cotisation: ['', Validators.required],
      annee: [cotisation.cotisationAnnuelle.annee, Validators.required],
      promoteur: [cotisation.cotisationAnnuelle.promoteurCotisation.nom, Validators.required],
      categorie: [cotisation.cotisationAnnuelle.categorie.nom]
    });
    this.api.getCotisationAnnuelleSearch(String(cotisation.cotisationAnnuelle.annee), String(cotisation.cotisationAnnuelle.categorie.nom), String(cotisation.cotisationAnnuelle.promoteurCotisation.nom)).subscribe(data => {
      this.cotisationAnnuelle = data;
    });
  }

  get f() { return this.cotisationForm.controls; }

  updateCotisation() {
    this.submitted = true;
    if (this.cotisationForm.invalid)
      return;
    let cotisationUpd = new Cotisation();
    if (this.cotisationForm.value.montant == '' && this.cotisationForm.value.detail_don_materiel == '')
      return;
    if (this.cotisationForm.value.montant == '') {
      cotisationUpd.montant = null;
    } else {
      cotisationUpd.montant = this.cotisationForm.value.montant;
    }
    if (this.cotisationForm.value.detail_don_materiel == '') {
      cotisationUpd.detailDonMateriel = null;
    } else {
      cotisationUpd.detailDonMateriel = this.cotisationForm.value.detail_don_materiel;
    }
    cotisationUpd.dateCotisation = new Date(this.cotisationForm.value.date_cotisation);
    cotisationUpd.cotisationAnnuelle = '/cotisationAnnuelles/' + this.cotisationAnnuelle[0].id;
    cotisationUpd.membre = '/membres/' + this.membre.id;
    this.apiCotisation.update(cotisationUpd, '/cotisations/' + this.cotisation.id).subscribe(data => {
      alert('Cotisation modifiée avec succès');
      this.router.navigate(['/membre-detail/', this.membre.id]);
    })
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
