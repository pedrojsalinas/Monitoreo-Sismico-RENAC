import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef} from "@angular/material";
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Sensor } from '../../../clases/acelerografo';
import { AcelerografoService } from '../../../servicios/acelerografo/acelerografo.service';

@Component({
  selector: 'app-add-sensor',
  templateUrl: './add-sensor.component.html',
  styleUrls: ['./add-sensor.component.scss']
})
export class AddSensorComponent implements OnInit {

  sensorForm = this.fb.group({
    nombre: ['', Validators.required],
    modelo: ['', Validators.required],
  });

  constructor(
    private dialogRef: MatDialogRef<AddSensorComponent>,
    private fb: FormBuilder,
    private acelerografoService: AcelerografoService,
  ) {}

  ngOnInit() {

  }
  onSubmit(){
    this.acelerografoService.addSensor(this.sensorForm.value)
  }

}
