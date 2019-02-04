import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapaComponent } from './mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { DetalleComponent } from './detalle/detalle.component';
import { DetalleAceleracionComponent } from './detalle-aceleracion/detalle-aceleracion.component';

import {
  MatButtonModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  declarations: [
    LoginComponent,
    MapaComponent,
    DetalleComponent,
    DetalleAceleracionComponent,
  ],
  imports: [
    CommonModule,
    UiRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ]
})
export class UiModule { }
