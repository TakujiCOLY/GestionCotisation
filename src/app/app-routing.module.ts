import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MembreComponent } from './membre/membre.component';
import { CotisationComponent } from './cotisation/cotisation.component';
import { CotisationAnnuelleComponent } from './cotisation-annuelle/cotisation-annuelle.component';
import { CategorieComponent } from './categorie/categorie.component';
import { MembreDetailComponent } from './membre-detail/membre-detail.component';
import { MembreUpdateComponent } from './membre-update/membre-update.component';
import { MembreAddComponent } from './membre-add/membre-add.component';
import { CotisationAddComponent } from './cotisation-add/cotisation-add.component';
import { CotisationUpdateComponent } from './cotisation-update/cotisation-update.component';
import { PromoteurCotisationComponent } from './promoteur-cotisation/promoteur-cotisation.component';
import { PaysComponent } from './pays/pays.component';
import { RegionComponent } from './region/region.component';
import { DepartementComponent } from './departement/departement.component';
import { AdresseComponent } from './adresse/adresse.component';
import { MembreUpComponent } from './membre-up/membre-up.component';
import { AdresseUpdateComponent } from './adresse-update/adresse-update.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      { path: 'accueil', component: AccueilComponent },
      { path: 'membres', component: MembreComponent },
      { path: 'membre-add', component: MembreAddComponent },
      { path: 'membre-upd/:id', component: MembreUpComponent },
      { path: 'membre-detail/:id', component: MembreDetailComponent },
      { path: 'cotisations', component: CotisationComponent },
      { path: 'membre-detail/:id/cot-add', component: CotisationAddComponent },
      { path: 'membre-detail/:id/cot-upd/:id_cot', component: CotisationUpdateComponent },
      { path: 'membre-detail/:id/adr-add', component: AdresseComponent },
      { path: 'membre-detail/:id/adr-upd/:id_adr', component: AdresseUpdateComponent },
      { path: 'cot-annuelles', component: CotisationAnnuelleComponent },
      { path: 'categories', component: CategorieComponent },
      { path: 'promoteur-cot', component: PromoteurCotisationComponent },
      { path: 'pays', component: PaysComponent },
      { path: 'regions', component: RegionComponent },
      { path: 'departements', component: DepartementComponent },
      { path: 'adresses', component: AdresseComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
