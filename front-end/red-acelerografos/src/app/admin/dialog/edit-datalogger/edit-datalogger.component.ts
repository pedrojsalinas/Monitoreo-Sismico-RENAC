import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Datalogger } from '../../../clases/acelerografo';
import { AcelerografoService } from '../../../servicios/acelerografo/acelerografo.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-edit-datalogger',
  templateUrl: './edit-datalogger.component.html',
  styleUrls: ['./edit-datalogger.component.scss']
})
export class EditDataloggerComponent implements OnInit {
  private url;

  dataloggerForm = this.fb.group({
    nombre: ['', Validators.required],
    modelo: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private acelerografoService: AcelerografoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.url = this.data.url;
      this.acelerografoService.getDatalogger(this.url).subscribe(res=>{
      this.dataloggerForm.get('nombre').setValue(res.nombre)
      this.dataloggerForm.get('modelo').setValue(res.modelo)
    })
  }
  onSubmit(){
    // this.acelerografoService.addDatalogger(this.dataloggerForm.value)
  }

}
