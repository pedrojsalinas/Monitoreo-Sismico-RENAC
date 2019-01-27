import { Component, OnInit } from '@angular/core';
import { AddEstacionComponent } from '../dialog/add-estacion/add-estacion.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styleUrls: ['./estaciones.component.scss']
})
export class EstacionesComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }
  addEstacion(){
    const dialogRef = this.dialog.open(AddEstacionComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.cargarEstaciones();
    });
  }
  openDialog(url) {
    const dialogRef = this.dialog.open(AddEstacionComponent, {
      data: { url: url },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.cargarEstaciones();
    });
  }
  cargarEstaciones() {

  }
}
