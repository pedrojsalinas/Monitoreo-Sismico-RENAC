import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Acelerografo, Sensor, Datalogger, Aceleracion } from '../../clases/acelerografo';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AcelerografoService {
  acelerografoUrl = 'http://127.0.0.1:8000/acelerografos/';
  sensorUrl = 'http://127.0.0.1:8000/sensores/';
  aceleracionUrl = 'http://127.0.0.1:8000/acelerations/';
  dataloggerUrl = 'http://127.0.0.1:8000/dataloggers/';
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


  getAcelerografos(): Observable<Acelerografo[]> {
    return this.http.get<Acelerografo[]>(this.acelerografoUrl, this.httpOptions);
  }
  getSensores(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.sensorUrl, this.httpOptions);
  }
  getAceleraciones(id): Observable<Aceleracion[]> {
    return this.http.get<Aceleracion[]>(this.aceleracionUrl+id, this.httpOptions);
  }
  getDataloggers(): Observable<Datalogger[]> {
    return this.http.get<Datalogger[]>(this.dataloggerUrl, this.httpOptions);
  }
  getSensor(url): Observable<Sensor> {
    return this.http.get<Sensor>(url, this.httpOptions);
  }
  getAcelerografo(url): Observable<Acelerografo> {
    return this.http.get<Acelerografo>(url, this.httpOptions);
  }
  getAcelerografoById(id): Observable<Acelerografo> {
    return this.http.get<Acelerografo>(this.acelerografoUrl+id, this.httpOptions);
  }
  getDatalogger(url): Observable<Datalogger> {
    return this.http.get<Datalogger>(url, this.httpOptions);
  }
  addSensor(sensor: Sensor) {
    this.http.post<Sensor>(this.sensorUrl, sensor, this.httpOptions).subscribe(res=>{
            console.log('guardado!')
      },error=>console.log(error)
    )
  }
  addAcelerografo(acelerografo: Acelerografo) {
    this.http.post<Acelerografo>(this.acelerografoUrl, acelerografo, this.httpOptions).subscribe(res=>{
            console.log('guardado!')
      },error=>console.log(error)
    )
  }
  deleteSensor(url) {
    return this.http.delete<Sensor>(url, this.httpOptions).subscribe(res=>{
            console.log('eliminado!')
      },error=>console.log(error)
    )
  }

}
