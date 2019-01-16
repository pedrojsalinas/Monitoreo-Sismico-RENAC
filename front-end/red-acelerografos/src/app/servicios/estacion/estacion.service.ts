import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Estacion } from '../../clases/estacion';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstacionService {
  estacionesUrl = 'http://127.0.0.1:8000/estaciones/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }
  getEstaciones(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>(this.estacionesUrl, this.httpOptions);
  }
  getEstacion(url): Observable<Estacion> {
    return this.http.get<Estacion>(url, this.httpOptions);
  }
  addEstacion(estacion: Estacion) {
    this.http.post<Estacion>(this.estacionesUrl, estacion, this.httpOptions).subscribe(res=>{
            console.log('guardado!')
      },error=>console.log(error)
    )
  }
}
