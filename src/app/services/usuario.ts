import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario } from './interfaces/iusuario';

@Injectable({
  providedIn: 'root'
})
export class Usuario {
  private apiUrl = 'http://localhost:5000/perfil';

  constructor(private http: HttpClient) {}

  getPerfil(token: string): Observable<{ usuario: IUsuario }> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<{ usuario: IUsuario }>(this.apiUrl, { headers });
  }

  actualizarPerfil(data: Partial<IUsuario>, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(this.apiUrl, data, { headers });
  }
}
