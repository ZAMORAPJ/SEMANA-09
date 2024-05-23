import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GlobalComponent } from '../global-component';
import { Usuario } from '../models/usuario';

const API_URL = GlobalComponent.API_URL;

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  EndPoint!: string;

  constructor(private httpClient: HttpClient) { }

  getUsuariosListar() : Observable<any> {
    this.EndPoint = GlobalComponent.EndPoint_get_Usuario_Listar.toString();
    return this.httpClient.get<any>(`${API_URL}/${this.EndPoint}`).pipe(map(res => { return res;}));
  }

  getUsuarioVerById(xId: any) : Observable<any> {
    this.EndPoint = GlobalComponent.EndPoint_get_Usuario_VerById.toString().replace("{id}",`${xId}`);
    return this.httpClient.get<any>(`${API_URL}/${this.EndPoint}`).pipe(map(res => { return res;}));
  }

  voidUsuarioRegistrar(paramUsuario: Usuario) : Observable<any> {
    this.EndPoint = GlobalComponent.EndPoint_post_Usuario_Registrar.toString();
    return this.httpClient.post<any>(`${API_URL}/${this.EndPoint}`, paramUsuario).pipe(map(res => { return res;}));
  }

  voidUsuarioActualizar(xId: any, paramUsuario: Usuario) : Observable<any> {
    this.EndPoint = GlobalComponent.EndPoint_put_Usuario_Actualizar.toString().replace("{id}",`${xId}`);
    return this.httpClient.put<any>(`${API_URL}/${this.EndPoint}`, paramUsuario).pipe(map(res => { return res;}));
  }

  voidUsuarioAnular(xId: any) : Observable<any> {
    this.EndPoint = GlobalComponent.EndPoint_put_Usuario_Anular.toString().replace("{id}",`${xId}`);
    return this.httpClient.put<any>(`${API_URL}/${this.EndPoint}`, null).pipe(map(res => { return res;}));
  }
}
