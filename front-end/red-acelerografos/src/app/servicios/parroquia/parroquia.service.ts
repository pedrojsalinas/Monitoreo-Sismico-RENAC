import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Provincia, Canton, Parroquia } from '../../clases/parroquia';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParroquiaService {

  provinciaUrl = 'http://127.0.0.1:8000/provincias/';
  cantonUrl = 'http://127.0.0.1:8000/cantones/';
  parroquiaUrl = 'http://127.0.0.1:8000/parroquias/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient,
  ) {
  }
  getProvincias(): Observable<Provincia[]> {
    return this.http.get<Provincia[]>(this.provinciaUrl, this.httpOptions);
  }
  getCantones(): Observable<Canton[]> {
    return this.http.get<Canton[]>(this.cantonUrl, this.httpOptions);
  }
  getParroquias(): Observable<Parroquia[]> {
    return this.http.get<Parroquia[]>(this.parroquiaUrl, this.httpOptions);
  }
}
