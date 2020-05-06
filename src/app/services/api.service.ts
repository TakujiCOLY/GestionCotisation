import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Categorie } from '../models/categorie';
import { Pays } from '../models/pays';
import { RegionP } from '../models/regionP';
import { DepartementP } from '../models/departementP';
import { PromoteurCotisation } from '../models/promoteurCotisation';
import { CotisationAnnuelleP } from '../models/cotisationAnnuelleP';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public host: string = "http://127.0.0.1:9000/api";

  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Categorie[]> {
    return this.http.get<GetReponseCategories>(this.host + '/categories/search/tri').pipe(
      map(response => response._embedded.categories)
    );
  }

  public getCategorieSearch(nom: String): Observable<Categorie[]> {
    return this.http.get<GetReponseCategories>(this.host + '/categories/search/byNom?nom=' + nom).pipe(
      map(response => response._embedded.categories)
    );
  }

  public getPays(): Observable<Pays[]> {
    return this.http.get<GetResponsePays>(this.host + '/payses/search/tri').pipe(
      map(response => response._embedded.payses)
    );
  }

  public getPaySearch(nom: String): Observable<Pays[]> {
    return this.http.get<GetResponsePays>(this.host + '/payses/search/byNom?nom=' + nom).pipe(
      map(response => response._embedded.payses)
    );
  }

  public getRegions(): Observable<RegionP[]> {
    return this.http.get<GetResponseRegions>(this.host + '/regions/search/tri?projection=Rg').pipe(
      map(response => response._embedded.regions)
    );
  }

  public getRegionSearch(nom: string, pays: string): Observable<RegionP[]> {
    return this.http.get<GetResponseRegions>(this.host + '/regions/search/byPays?nom=' + nom + '&pays=' + pays + '&projection=Rg').pipe(
      map(response => response._embedded.regions)
    )
  }

  public getDepartement(): Observable<DepartementP[]> {
    return this.http.get<GetResponseDepartements>(this.host + '/departements/search/tri?projection=Dpt').pipe(
      map(response => response._embedded.departements)
    );
  }

  public getDepartementSearch(nom: string, region: string): Observable<DepartementP[]> {
    return this.http.get<GetResponseDepartements>(this.host + '/departements/search/byRegion?nom=' + nom + '&region=' + region + '&projection=Dpt').pipe(
      map(response => response._embedded.departements)
    );
  }

  public getPromoteurs(): Observable<PromoteurCotisation[]> {
    return this.http.get<GetResponsePromoteurCotisations>(this.host + '/promoteurCotisations/search/tri').pipe(
      map(response => response._embedded.promoteurCotisations)
    );
  }

  public getPromoteurSearch(nom: string, lieu: string, siege: string): Observable<PromoteurCotisation[]> {
    return this.http.get<GetResponsePromoteurCotisations>(this.host + '/promoteurCotisations/search/byNom?nom=' + nom+'&lieu='+lieu+'&siege='+siege).pipe(
      map(response => response._embedded.promoteurCotisations)
    );
  }

  public getCotisationAnnuelles(): Observable<CotisationAnnuelleP[]> {
    return this.http.get<GetResponseCotisationAnnuelles>(this.host + '/cotisationAnnuelles/search/tri?projection=CA').pipe(
      map(response => response._embedded.cotisationAnnuelles)
    );
  }

  public getCotisationAnnuelleSearch(annee: string, categorie: string, promoteur: string): Observable<CotisationAnnuelleP[]> {
    return this.http.get<GetResponseCotisationAnnuelles>(this.host + '/cotisationAnnuelles/search/byAnneeCategoriePromoteur?annee=' + annee + '&categorie=' + categorie + '&promoteur=' + promoteur + '&projection=CA').pipe(
      map(response => response._embedded.cotisationAnnuelles)
    );
  }

  public get(url: string) {
    return this.http.get(this.host + url);
  }

  public add(model: Object, url: String) {
    return this.http.post(this.host + url, model, this.httpOptions);
  }

  public update(model: Object, url: string) {
    return this.http.put(this.host + url, model, this.httpOptions);
  }

  public delete(url: String) {
    return this.http.delete(this.host + url, this.httpOptions);
  }
}

interface GetReponseCategories {
  _embedded: {
    categories: Categorie[];
  }
}
interface GetResponsePays {
  _embedded: {
    payses: Pays[];
  }
}
interface GetResponseRegions {
  _embedded: {
    regions: RegionP[];
  }
}
interface GetResponseDepartements {
  _embedded: {
    departements: DepartementP[];
  }
}
interface GetResponsePromoteurCotisations {
  _embedded: {
    promoteurCotisations: PromoteurCotisation[];
  }
}
interface GetResponseCotisationAnnuelles {
  _embedded: {
    cotisationAnnuelles: CotisationAnnuelleP[];
  }
}
