import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Sensor } from '../../../clases/acelerografo';
import { AcelerografoService } from '../../../servicios/acelerografo/acelerografo.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-edit-sensor',
  templateUrl: './edit-sensor.component.html',
  styleUrls: ['./edit-sensor.component.scss']
})
export class EditSensorComponent implements OnInit {
  private url;
  sensores: Sensor [] =[];

  sensorForm = this.fb.group({
    nombre: ['', Validators.required],
    modelo: ['', Validators.required],
  });

  constructor(
    private dialogRef: MatDialogRef<EditSensorComponent>,
    private fb: FormBuilder,
    private acelerografoService: AcelerografoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.url = this.data.url;
      this.acelerografoService.getSensor(this.url).subscribe(res=>{
      this.sensorForm.get('nombre').setValue(res.nombre)
      this.sensorForm.get('modelo').setValue(res.modelo)
    })
  }
  onSubmit(){
    this.acelerografoService.addSensor(this.sensorForm.value)
  }

}
