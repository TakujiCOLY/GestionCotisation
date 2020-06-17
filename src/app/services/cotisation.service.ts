import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CotisationP } from '../models/cotisationP';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Cotisation } from '../models/cotisation';

@Injectable({
  providedIn: 'root'
})
export class CotisationService {
  public host: string = "http://127.0.0.1:9000/api";

  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  public getCotisationsMembre(id): Observable<CotisationP[]> {
    return this.http.get<GetResponseCotisations>(this.host + '/cotisations/search/byMembre?membre=' + id + '&projection=Ct').pipe(
      map(response => response._embedded.cotisations)
    );
  }

  public getCotisationUnique(id): Observable<CotisationP> {
    return this.http.get<CotisationP>(this.host + '/cotisations/' + id + '?projection=Ct');
  }

  public add(cotisation: Cotisation, url: String) {
    return this.http.post(this.host + url, cotisation, this.httpOptions);
  }

  public update(model: Cotisation, url: string) {
    return this.http.put(this.host + url, model, this.httpOptions);
  }

  public delete(url: String) {
    return this.http.delete(this.host + url, this.httpOptions);
  }
}
interface GetResponseCotisations {
  _embedded: {
    cotisations: CotisationP[];
  }
}
