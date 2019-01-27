import { Component, OnInit } from '@angular/core';
declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title: string = 'My first AGM project';
lat: number = 51.678418;
lng: number = 7.809007;

}
