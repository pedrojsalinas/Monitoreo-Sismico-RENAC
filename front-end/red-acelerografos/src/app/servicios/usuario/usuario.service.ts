import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import {Usuario,Auth} from '../../clases/usuario';
import {StoreService} from '../store/store.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

usuario: Object;

loginUrl = 'http://127.0.0.1:8000/rest-auth/login/';
registroUrl = 'http://127.0.0.1:8000/rest-auth/registration/';
authUrl = 'http://127.0.0.1:8000/api-token-auth/';
logoutUrl = 'http://127.0.0.1:8000/rest-auth/logout/';
usuarioUrl = 'http://127.0.0.1:8000/users/';

  httpOptions= {headers: new HttpHeaders({
  'Content-Type':  'application/json'
  })}



  constructor(
    private http: HttpClient,
    private storeService: StoreService,
    private router: Router,
  ) {
  }

  addUsuario(usuario:Usuario){
    this.http.post<Usuario>(this.registroUrl,usuario,this.httpOptions).subscribe(response=>{
      alert('Usuario creado');
    },error=>console.log(error)
    );
  }
// loginUser(usuario: Usuario): Observable<Usuario> {
//   return this.http.post<Usuario>(this.loginUrl, usuario, this.httpOptions)
//     .pipe(
//       // catchError(this.handleError('addusuario', usuario))
//     );
// }

  logout(){
    this.http.post(this.logoutUrl,this.httpOptions).subscribe(response=>{
      console.log(response)
    },error=>console.log(error)
    );
  }

  getAuth(usuario:Usuario,token){
    const httpOptions= {headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': token
    })}
    this.http.post<Usuario>(this.authUrl,usuario,httpOptions).subscribe(res=>{
      this.usuario = res;
            this.storeService.saveSomeData(res)
            console.log('guardado!')
      },error=>console.log(error)
    )
  }

  login(usuario:Usuario){
    this.http.post<Usuario>(this.loginUrl,usuario,this.httpOptions).subscribe(res=>{
      console.log(res)
      this.getAuth(usuario,res.key)
      this.router.navigate(['/dashboard']);
    },error=>console.log(error)
    );
  }

  getUsuarios(): Observable<Usuario[]>{
    let user = this.storeService.getUsuario()
    const httpOptions= {headers: new HttpHeaders({
      'Authorization': 'token 0bdf7b3465cd08e724db9fdb2345ccd9d27c29f8',
      'Content-Type':  'application/json'
    })}
    return this.http.get<Usuario []>(this.usuarioUrl,httpOptions);
  //   return this.http.get<Config>(
  // this.configUrl, { observe: 'response' });
  }
  getUsuario(url){
    let user = this.storeService.getUsuario()
    const httpOptions= {headers: new HttpHeaders({
      'Authorization': 'token 0bdf7b3465cd08e724db9fdb2345ccd9d27c29f8',
      'Content-Type':  'application/json'
    })}
    return this.http.get<Usuario>(url,httpOptions);
  }
  actualizarUsuario(url,usuario:Usuario){
    console.log(url)
    const httpOptions= {headers: new HttpHeaders({
      'Authorization': 'token 0bdf7b3465cd08e724db9fdb2345ccd9d27c29f8',
      'Content-Type':  'application/json'
    })}
    this.http.put<Usuario>(url,usuario,httpOptions).subscribe(response=>{
      alert('Usuario editado');
    },error=>console.log(error)
    );
  }
  /** PUT: update the hero on the server. Returns the updated hero upon success. */
// updateHero (usuario:Usuario): Observable<Usuario> {
//   const httpOptions= {headers: new HttpHeaders({
//     'Authorization': 'token 0bdf7b3465cd08e724db9fdb2345ccd9d27c29f8',
//     'Content-Type':  'application/json'
//   })}
//   return this.http.put<Usuario>(usuario.url, usuario, httpOptions)
//     .pipe(
//       catchError(this.handleError('updateHero', usuario))
//     );
// }

}
