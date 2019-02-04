import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AcelerografoService } from '../../servicios/acelerografo/acelerografo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Acelerografo, Sensor, Aceleracion } from '../../clases/acelerografo';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-detalle-aceleracion',
  templateUrl: './detalle-aceleracion.component.html',
  styleUrls: ['./detalle-aceleracion.component.scss']
})
export class DetalleAceleracionComponent implements OnInit {
  id: any;
  acelerografo: Acelerografo
  aceleracion: Aceleracion
  sensor: Sensor
  lat: number;
  lng: number;
  datos: any
  aceleraciones = []
  chart = [];
  @ViewChild('myCanvas') myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;
  constructor(
    private acelerografoService: AcelerografoService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.id = this.route.snapshot.paramMap.get("id")
    this.acelerografoService.getAceleracionById(this.id).subscribe(aceleracion => {
      this.aceleracion = aceleracion
      this.acelerografoService.getAcelerografo(aceleracion.acelerografo).subscribe(acelerografo => {
        this.acelerografo = acelerografo
        this.lat = Number(acelerografo.latitud)
        this.lng = Number(acelerografo.longitud)
        this.acelerografoService.getSensor(acelerografo.sensor).subscribe(sensor => {
          this.sensor = sensor
        })
      })
    })
    // this.datos.forEach(a=>{
    //   console.log(Number(a))
    //
    // })
  }

  ngOnInit() {
    let arr = []
    let count = 0.01
    this.acelerografoService.getDatos(this.id).subscribe(data => {
      this.datos = data
      this.datos.forEach((a, i) => {
        this.aceleraciones.push(Number(a))
        arr.push(i)
      })

      var ctx = <HTMLCanvasElement>this.myCanvas.nativeElement.getContext('2d');

      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: arr,
          datasets: [{
            label: "Aceleración (cm/s^2)",
            position:'bottom',
            backgroundColor: '#9E9E9E',
            borderColor: '#9E9E9E',
            data: this.aceleraciones,
          }]

        },
        options: {
          title: {
            display: true,
            text: 'Serie de datos aceleración sísmica'
          },
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: false,
            }],
            yAxes: [{
              display: true
            }],
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    })
  }

}
