import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Acelerografo,Sensor } from '../../../clases/acelerografo';
import { AcelerografoService } from '../../../servicios/acelerografo/acelerografo.service';

@Component({
  selector: 'app-add-acelerografo',
  templateUrl: './add-acelerografo.component.html',
  styleUrls: ['./add-acelerografo.component.scss']
})
export class AddAcelerografoComponent implements OnInit {

  acelerografoForm = this.fb.group({
    nombre: ['', Validators.required],
    activo: ['', Validators.required],
    ubicacion: ['', Validators.required],
    latitud: ['', Validators.required],
    longitud: ['', Validators.required],
    altitud: ['', Validators.required],
    sensor: ['', Validators.required],
  });
    sensores: Sensor [] =[];

  constructor(
    private dialogRef: MatDialogRef<AddAcelerografoComponent>,
    private fb: FormBuilder,
    private acelerografoService: AcelerografoService,
  ) { }

  ngOnInit() {
    this.acelerografoService.getSensores().subscribe(res=>{
      this.sensores = res
    })
  }

  onSubmit() {
    this.acelerografoService.addAcelerografo(this.acelerografoForm.value)
    console.log(this.acelerografoForm.value)
  }

}
