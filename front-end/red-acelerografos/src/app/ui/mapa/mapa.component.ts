import { Component, OnInit } from '@angular/core';
import { Acelerografo } from '../../clases/acelerografo';
import { AcelerografoService } from '../../servicios/acelerografo/acelerografo.service';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';
declare const google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  acelerografos: Acelerografo[] = [];
  acelerografo: Acelerografo;
  myControl = new FormControl();
  options: string[];
  public isAcelerografo: boolean = false;
  filteredAcelerografos: Observable<Acelerografo[]>;

  constructor(
    private acelerografoService: AcelerografoService,
    private router: Router,
  ) {
    this.cargarAcelerografo()
  }

  ngOnInit() {
    // this.findMe()

  }

  lat: number = -3.986384;
  lng: number = -79.199769;
  zoom: number = 8;

  cargarAcelerografo() {
    this.acelerografoService.getAcelerografos().subscribe(res => {
      res.forEach(acelerografo => {
        acelerografo.latitud = Number(acelerografo.latitud)
        acelerografo.longitud = Number(acelerografo.longitud)
      })
      this.acelerografos = res
    })
    this.filteredAcelerografos = this.myControl.valueChanges
      .pipe(
        startWith<string | Acelerografo>(''),
        map(value => typeof value === 'string' ? value : value.nombre),
        map(nombre => nombre ? this.filter(nombre) : this.acelerografos.slice())
      );
  }

  filter(nombre: string): Acelerografo[] {
    return this.acelerografos.filter(option =>
      option.nombre.toLowerCase().indexOf(nombre.toLowerCase()) === 0);
  }
  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  selectAcelerografo(e: MatAutocompleteSelectedEvent) {
    this.isAcelerografo = true
    this.zoom=15
    this.acelerografo = e.option.value
    this.lat = e.option.value.latitud;
    this.lng = e.option.value.longitud;
  }

  // dataChanged(e) {
  //
  //   if (e.id !== "" && this.acelerografos !== null) {
  //     // code...
  //     this.cuentaService.getCuentaSocio(e.id).subscribe(data => {
  //       this.cuentas = data;
  //     })
  //   } else {
  //     console.log('undefined')
  //   }
  // }

  displayFn(acelerografo?: Acelerografo): string | undefined {
    return acelerografo ? acelerografo.nombre : undefined
  }
  registro(acelerografo) {
    this.router.navigate(['/ui/detalle/'+acelerografo.id])
  }

}
