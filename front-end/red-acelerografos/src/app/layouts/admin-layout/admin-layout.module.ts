import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../admin/user-profile/user-profile.component';
import { UsuariosComponent } from '../../admin/usuarios/usuarios.component';
import { EditarUsuarioComponent } from '../../admin/editar-usuario/editar-usuario.component';
import { AcelerometrosComponent } from '../../admin/acelerometros/acelerometros.component';
import { AddSensorComponent } from '../../admin/dialog/add-sensor/add-sensor.component';
import { AddAcelerografoComponent } from '../../admin/dialog/add-acelerografo/add-acelerografo.component';
import { EditAcelerografoComponent } from '../../admin/dialog/edit-acelerografo/edit-acelerografo.component';
import { EditSensorComponent } from '../../admin/dialog/edit-sensor/edit-sensor.component';
import { AddDataloggerComponent } from '../../admin/dialog/add-datalogger/add-datalogger.component';
import { EditDataloggerComponent } from '../../admin/dialog/edit-datalogger/edit-datalogger.component';
import { EstacionesComponent } from '../../admin/estaciones/estaciones.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatIconModule,
  MatTableModule,
  MatDialogModule,
  MatTabsModule,
  MatCheckboxModule,
  MatCardModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatCheckboxModule,
    MatCardModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    UsuariosComponent,
    EditarUsuarioComponent,
    AcelerometrosComponent,
    AddSensorComponent,
    AddAcelerografoComponent,
    EditAcelerografoComponent,
    EditSensorComponent,
    AddDataloggerComponent,
    EditDataloggerComponent,
    EstacionesComponent,
  ],
  entryComponents:[
    EditarUsuarioComponent,
    AddSensorComponent,
    AddAcelerografoComponent,
    EditAcelerografoComponent,
    EditSensorComponent,
    AddDataloggerComponent,
    EditDataloggerComponent,
  ]
})

export class AdminLayoutModule {}
