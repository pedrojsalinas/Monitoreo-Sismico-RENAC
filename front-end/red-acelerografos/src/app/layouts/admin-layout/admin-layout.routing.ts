import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../admin/user-profile/user-profile.component';
import { UsuariosComponent } from '../../admin/usuarios/usuarios.component';
import { AcelerometrosComponent } from '../../admin/acelerometros/acelerometros.component';
import { EstacionesComponent } from '../../admin/estaciones/estaciones.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'usuarios',        component: UsuariosComponent },
    { path: 'acelerografos', component: AcelerometrosComponent },
    { path: 'estaciones', component: EstacionesComponent },
];
