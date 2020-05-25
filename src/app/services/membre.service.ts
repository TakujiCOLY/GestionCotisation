import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MembreP } from '../models/membreP';
import { map } from 'rxjs/operators';
import { Membre } from '../models/membre';

@Injectable({
  providedIn: 'root'
})
export class MembreService {
  public host: string = "http://127.0.0.1:9000/api";

  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  public get(url) {
    return this.http.get(this.host + url);
  }

  public getById(id: string): Observable<MembreP> {
    return this.http.get<MembreP>(this.host + '/membres/' + id + '?projection=M').pipe(
      map(response => response)
    );
  }

  public getMembres(): Observable<MembreP[]> {
    return this.http.get<GetResponseMembre>(this.host + '/membres/search/tri?projection=M').pipe(
      map(response => response._embedded.membres)
    );
  }

  public getMembreSearch(nom: string, prenom: string, categorie: string): Observable<MembreP[]> {
    return this.http.get<GetResponseMembre>(this.host + '/membres/search/byName?nom=' + nom + '&prenom=' + prenom + '&categorie=' + categorie + '&projection=M').pipe(
      map(response => response._embedded.membres)
    )
  }

  public add(membre: Membre, url: String) {
    return this.http.post(this.host + url, membre, this.httpOptions);
  }

  public update(membre: Membre, url: string) {
    return this.http.put(this.host + url, membre, this.httpOptions);
  }

  public delete(url: String) {
    return this.http.delete(this.host + url, this.httpOptions);
  }
}
interface GetResponseMembre {
  _embedded: {
    membres: MembreP[];
  }
}
