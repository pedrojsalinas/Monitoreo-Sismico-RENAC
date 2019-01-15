import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Usuario } from './../../clases/usuario';
import { StoreService } from './../../servicios/store/store.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    usuario:Usuario;


  perfilForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private storeService: StoreService

  ) {
    }

  ngOnInit() {
    this.usuario = this.storeService.getUsuario();
    console.log(this.usuario)
    this.perfilForm.get('username').setValue(this.usuario.username)
    this.perfilForm.get('email').setValue(this.usuario.email)
    this.perfilForm.get('nombre').setValue(this.usuario.first_name)
    this.perfilForm.get('apellido').setValue(this.usuario.last_name)
  }
  onSubmit(){

    console.log(this.perfilForm.value)
  }
}
