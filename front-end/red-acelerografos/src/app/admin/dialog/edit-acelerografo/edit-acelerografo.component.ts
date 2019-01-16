import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Acelerografo,Sensor } from '../../../clases/acelerografo';
import { AcelerografoService } from '../../../servicios/acelerografo/acelerografo.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-edit-acelerografo',
  templateUrl: './edit-acelerografo.component.html',
  styleUrls: ['./edit-acelerografo.component.scss']
})
export class EditAcelerografoComponent implements OnInit {

  private url;
  acelerografoForm = this.fb.group({
    nombre: ['', Validators.required],
    activo: ['', Validators.required],
    ubicacion: ['', Validators.required],
    latitud: ['', Validators.required],
    longitud: ['', Validators.required],
    altitud: ['', Validators.required],
    sensor: ['', Validators.required],
  });
    acelerografo: Acelerografo ;
    sensores: Sensor [] =[];

  constructor(
    private dialogRef: MatDialogRef<EditAcelerografoComponent>,
    private fb: FormBuilder,
    private acelerografoService: AcelerografoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {

    this.url = this.data.url;
      this.acelerografoService.getAcelerografo(this.url).subscribe(res=>{
      this.acelerografoForm.get('nombre').setValue(res.nombre)
      this.acelerografoForm.get('activo').setValue(res.activo)
      this.acelerografoForm.get('ubicacion').setValue(res.ubicacion)
      this.acelerografoForm.get('latitud').setValue(res.latitud)
      this.acelerografoForm.get('longitud').setValue(res.longitud)
      this.acelerografoForm.get('altitud').setValue(res.altitud)
      this.acelerografoForm.get('sensor').setValue(res.sensor)
    })
    this.acelerografoService.getSensores().subscribe(res=>{
      this.sensores = res
    })
  }

  onSubmit() {
    // this.acelerografoService.addAcelerografo(this.acelerografoForm.value)
    console.log(this.acelerografoForm.value)
  }

}
