import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource,MatTable} from '@angular/material';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../servicios/usuario/usuario.service';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material';
import { EditarUsuarioComponent } from '../../admin/editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;
   @ViewChild(MatSort) sort: MatSort;
  displayedColumns= ['email', 'username', 'groups','nombre','apellido','accion'];

  dataSource = new MatTableDataSource();
  usuarios: Usuario [] =[];
  usuario:Usuario;

  constructor(
    private usuarioService:UsuarioService,
    public dialog: MatDialog,
    ) {
      this.usuarioService.getUsuarios().subscribe(res=>{
        this.dataSource.data = res
        this.dataSource.sort = this.sort;
        this.usuarios = res
      })
  }



  ngOnInit() {

  }
  openDialog(url) {
    const dialogRef = this.dialog.open(EditarUsuarioComponent,{
      data: { url: url },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.usuarioService.getUsuarios().subscribe(res=>{
        this.dataSource.data = res
        this.dataSource.sort = this.sort;
        this.usuarios = res
      })
    });
  }
}
