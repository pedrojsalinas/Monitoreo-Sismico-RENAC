import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource,MatTable} from '@angular/material';
import { Estacion } from '../../clases/estacion';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material';
import { EstacionService } from '../../servicios/estacion/estacion.service';

@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styleUrls: ['./estaciones.component.scss']
})
export class EstacionesComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns= ['nombre','ubicacion','latitud','longitud','red','accion'];


  dataSource = new MatTableDataSource();

  estaciones: Estacion [] =[];

  constructor(
    // private dialogRef: MatDialogRef<EstacionesComponent>,
    private estacionService: EstacionService,
  ) { }

  ngOnInit() {
    this.cargarEstaciones();
  }

  cargarEstaciones(){
    this.estacionService.getEstaciones().subscribe(res=>{

      // res.forEach(Estacion=>{
      //   this.estacionService.getSensor(Estacion.sensor).subscribe(data=>{
      //     Estacion.sensor =  `${data.nombre} ${data.modelo}`
      //   })
        this.dataSource.data = res
        this.dataSource.sort = this.sort;
        this.estaciones = res
      // })
    })
  }
}
