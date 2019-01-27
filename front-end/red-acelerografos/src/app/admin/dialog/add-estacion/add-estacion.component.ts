import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Parroquia, Provincia, Canton } from '../../../clases/parroquia';
import { AcelerografoService } from '../../../servicios/acelerografo/acelerografo.service';
import { ParroquiaService } from '../../../servicios/parroquia/parroquia.service';
import { MatOptionSelectionChange } from '@angular/material';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-add-estacion',
  templateUrl: './add-estacion.component.html',
  styleUrls: ['./add-estacion.component.scss']
})
export class AddEstacionComponent implements OnInit {


  estacionForm = this.fb.group({
    // nombre: ['', Validators.required],
    // activo: ['', Validators.required],
    // ubicacion: ['', Validators.required],
    // latitud: ['', Validators.required],
    // longitud: ['', Validators.required],
    // altitud: ['', Validators.required],
    provincia: ['', Validators.required],
    canton: ['', Validators.required],
    parroquia: ['', Validators.required],
  });
  parroquias: Parroquia[] = [];
  provincias: Provincia[] = [];
  cantones: Canton[] = [];
  cantonesAux: Canton[] = [];

  constructor(
    private fb: FormBuilder,
    private parroquiaService: ParroquiaService,
  ) {
    // console.log(this.estacionForm.get('provincia').value)
  }

  setCantones(event: MatOptionSelectionChange, url: any) {
    if (event.source.selected) {
      console.log('You selected: ', url);
      const cantones = from(this.cantones)
      const example = cantones.pipe(
        filter(canton =>
          canton.provincia == url))
        const subscribe = example.
        subscribe(data =>
          console.log(data.nombre))

    }
  }
  ngOnInit() {
    this.parroquiaService.getProvincias().subscribe(provincias => {
      this.provincias = provincias
      this.parroquiaService.getCantones().subscribe(cantones => {
        this.cantones = cantones
        this.parroquiaService.getParroquias().subscribe(parroquias => {
          this.parroquias = parroquias
        })
      })
    })
  }

}
