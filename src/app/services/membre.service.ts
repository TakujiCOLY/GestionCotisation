import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MembreService {
  public host: string = "http://127.0.0.1:9000/api";

  constructor(private http: HttpClient) { }

  public get(url) {
    return this.http.get(this.host + url);
  }

  
}
