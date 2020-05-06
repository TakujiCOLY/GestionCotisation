import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserComponent } from './user/user.component';
import { MembreComponent } from './membre/membre.component';
import { CotisationAnnuelleComponent } from './cotisation-annuelle/cotisation-annuelle.component';
import { CotisationComponent } from './cotisation/cotisation.component';
import { CategorieComponent } from './categorie/categorie.component';
import { MembreAddComponent } from './membre-add/membre-add.component';
import { MembreUpdateComponent } from './membre-update/membre-update.component';
import { MembreDetailComponent } from './membre-detail/membre-detail.component';
import { CotisationAddComponent } from './cotisation-add/cotisation-add.component';
import { CotisationUpdateComponent } from './cotisation-update/cotisation-update.component';
import { PaysComponent } from './pays/pays.component';
import { RegionComponent } from './region/region.component';
import { DepartementComponent } from './departement/departement.component';
import { AdresseComponent } from './adresse/adresse.component';
import { PromoteurCotisationComponent } from './promoteur-cotisation/promoteur-cotisation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccueilComponent,
    LoginComponent,
    ErrorPageComponent,
    UserComponent,
    MembreComponent,
    CotisationAnnuelleComponent,
    CotisationComponent,
    CategorieComponent,
    MembreAddComponent,
    MembreUpdateComponent,
    MembreDetailComponent,
    CotisationAddComponent,
    CotisationUpdateComponent,
    PaysComponent,
    RegionComponent,
    DepartementComponent,
    AdresseComponent,
    PromoteurCotisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
