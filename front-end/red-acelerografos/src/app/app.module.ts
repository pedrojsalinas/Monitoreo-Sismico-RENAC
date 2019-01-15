import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { WebStorageModule } from 'ngx-store';

import { UsuarioService } from './servicios/usuario/usuario.service';

import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './ui/login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { MatDialogModule, } from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCv-FSw73gLN9cfTBECg3VQ1vnkqAPnCHQ'
    }),
    HttpClientModule,
    WebStorageModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
  ],
  providers: [UsuarioService,],
  bootstrap: [AppComponent],
  exports:[]
  ,entryComponents:[]

})
export class AppModule { }
