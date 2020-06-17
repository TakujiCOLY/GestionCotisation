import { Component, OnInit } from '@angular/core';
import { Membre } from '../models/membre';
import { MembreP } from '../models/membreP';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MembreService } from '../services/membre.service';
import { AdresseP } from '../models/adresseP';
import { CotisationP } from '../models/cotisationP';
import { CotisationService } from '../services/cotisation.service';

@Component({
  selector: 'app-membre-detail',
  templateUrl: './membre-detail.component.html',
  styleUrls: ['./membre-detail.component.scss']
})
export class MembreDetailComponent implements OnInit {
  public membre: MembreP;
  public adresses: AdresseP[];
  public cotisations: CotisationP[];
  public cotisationAnnuelles: Object[];
  p: number = 1;

  constructor(private router: Router, private api: MembreService, private route: ActivatedRoute, private apiCot: CotisationService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    let idMembre = this.route.snapshot.params['id'];
    this.api.getById(idMembre).subscribe(data => {
      this.membre = data;
    });
    this.apiCot.getCotisationsMembre(parseInt(idMembre)).subscribe(data => {
      this.cotisations = data;
    });
    this.api.getHistoCotAnnuelles(idMembre).subscribe(data => {
      this.cotisationAnnuelles = data;
    })
  }

  updateMembre() {
    this.router.navigate(['/membre-upd/', this.membre.id]);
  }

  addAdresse() {
    // this.router.navigate(['membre-detail', this.membre.id, 'adr-add']);
  }

  updateAdresse(id) {
    // this.router.navigate(['membre-detail', this.membre.id, 'adr-upd', id]);
  }

  addCotisation() {
    this.router.navigate(['membre-detail', this.membre.id, 'cot-add']);
  }

  updateCotisation(id) {
    this.router.navigate(['membre-detail', this.membre.id, 'cot-upd', id]);
  }

}
