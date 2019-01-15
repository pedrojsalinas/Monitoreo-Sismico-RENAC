import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource,MatTable} from '@angular/material';
import { Acelerografo, Sensor } from '../../clases/acelerografo';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material';
import { AddSensorComponent } from '../../admin/dialog/add-sensor/add-sensor.component';
import { AddAcelerografoComponent } from '../../admin/dialog/add-acelerografo/add-acelerografo.component';
import { AcelerografoService } from '../../servicios/acelerografo/acelerografo.service';
import { EditAcelerografoComponent } from '../dialog/edit-acelerografo/edit-acelerografo.component';

@Component({
  selector: 'app-acelerometros',
  templateUrl: './acelerometros.component.html',
  styleUrls: ['./acelerometros.component.scss']
})
export class AcelerometrosComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;
   @ViewChild(MatSort) sort: MatSort;
  displayedColumns= ['nombre', 'ubicacion', 'latitud','longitud','altitud','accion'];
  displayedColumnsSensor= ['nombre', 'modelo','accion'];

  dataSource = new MatTableDataSource();
  dataSourceSensor = new MatTableDataSource();
  acelerografos: Acelerografo [] =[];
  sensores: Sensor [] =[];
  acelerografo:Acelerografo;

  constructor(
    private acelerografoService:AcelerografoService,
    public dialog: MatDialog,
    ) {
      this.cargarSensores();
      this.cargarAcelerografo();
  }



  ngOnInit() {

  }
  // openDialog(url) {
  //   const dialogRef = this.dialog.open(EditaracelerografoComponent,{
  //     data: { url: url },
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //     this.acelerografoService.getacelerografos().subscribe(res=>{
  //       this.dataSource.data = res
  //       this.dataSource.sort = this.sort;
  //       this.acelerografos = res
  //     })
  //   });
  // }
  addSensor(){
    const dialogRef = this.dialog.open(AddSensorComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.cargarSensores();
    });
  }
  addAcelerografo(){
    const dialogRef = this.dialog.open(AddAcelerografoComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.cargarAcelerografo();
    });
  }
  deleteSensor(url){
    this.acelerografoService.deleteSensor(url)
    this.cargarSensores();

  }
  cargarSensores(){
    this.acelerografoService.getSensores().subscribe(res=>{
      this.dataSourceSensor.data = res
      this.dataSourceSensor.sort = this.sort;
    })
  }
  cargarAcelerografo(){
    this.acelerografoService.getAcelerografos().subscribe(res=>{
      this.dataSource.data = res
      this.dataSource.sort = this.sort;
      this.acelerografos = res
      // res.forEach(acelerografo=>{
      //   this.acelerografoService.getSensor(acelerografo.sensor).subscribe(data=>{
      //
      //   })
      //   console.log(acelerografo.sensor)
      // })
    })
  }
  openDialog(url){
      const dialogRef = this.dialog.open(EditAcelerografoComponent,{
        data: { url: url },
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.cargarAcelerografo();
      });
  }
}