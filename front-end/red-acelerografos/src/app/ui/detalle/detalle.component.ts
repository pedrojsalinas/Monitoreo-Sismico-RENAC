import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AcelerografoService } from '../../servicios/acelerografo/acelerografo.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Aceleracion, Acelerografo, Sensor } from '../../clases/acelerografo';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  displayedColumns: string[] = ['fecha', 'hora'];
  dataSource: MatTableDataSource<Aceleracion>;
  acelerografo: Acelerografo
  sensor: Sensor
  aceleraciones: Aceleracion []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  id: any;

  constructor(
    private acelerografoService: AcelerografoService,
    private route: ActivatedRoute,
    private router: Router,
  ) {

    this.id = this.route.snapshot.paramMap.get("id")
    this.acelerografoService.getAcelerografoById(this.id).subscribe(acelerografo => {
      this.acelerografo = acelerografo
      this.acelerografoService.getSensor(acelerografo.sensor).subscribe(sensor => {
        this.sensor = sensor
      })
    })
    this.acelerografoService.getAceleraciones(this.id).subscribe(aceleraciones => {
      this.aceleraciones = aceleraciones
      this.dataSource = new MatTableDataSource(aceleraciones);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })

  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  detalle(row) {
    this.router.navigate(['/ui/aceleracion/' + row.id])

  }
}
