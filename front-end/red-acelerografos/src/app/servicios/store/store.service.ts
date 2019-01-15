import { Injectable } from '@angular/core';
import {LocalStorageService } from 'ngx-store';
import { Auth } from '../../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  auth:Auth;
  constructor(
    private localStorageService: LocalStorageService,
  ) {
  }

  public saveSomeData(object: Object) {
    this.localStorageService.set('token', object);

    // this.localStorageService.keys.forEach((key) => {
    //   console.log(key + ' =', this.localStorageService.get(key));
    // });
  }
  getUsuario(){
    this.auth =  this.localStorageService.get('token');
    return this.auth;
  }
  public clearSomeData(): void {
    this.localStorageService.clear('prefix'); // removes only variables created by decorating functions
    }
}
