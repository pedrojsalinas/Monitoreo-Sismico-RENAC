import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Usuario } from '../../clases/usuario';
import { StoreService } from '../../servicios/store/store.service';
import { UsuarioService } from '../../servicios/usuario/usuario.service';
@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  private url;
  constructor(
    private dialogRef: MatDialogRef<EditarUsuarioComponent>,
    private fb: FormBuilder,
    private storeService: StoreService,
    private usuarioService: UsuarioService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {


  }

  usuario:Usuario;


perfilForm = this.fb.group({
  username: ['', Validators.required],
  email: ['', Validators.required],
  first_name: ['', Validators.required],
  last_name: ['', Validators.required],
});



ngOnInit() {
  this.url = this.data.url;
  this.usuarioService.getUsuario(this.url).subscribe(res=>{
    this.usuario = res
    this.perfilForm.get('username').setValue(res.username)
    this.perfilForm.get('email').setValue(res.email)
    this.perfilForm.get('first_name').setValue(res.first_name)
    this.perfilForm.get('last_name').setValue(res.last_name)
  })
}
onSubmit(){

  console.log(this.perfilForm.value)
  this.usuarioService.actualizarUsuario(this.url, this.perfilForm.value)
}
}
