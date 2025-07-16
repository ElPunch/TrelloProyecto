import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProyecto } from './interfaces/iproyecto';

@Injectable({
  providedIn: 'root'
})
export class Proyecto {
  private apiUrl = 'http://http://127.0.0.1:5000/proyectos';

  constructor(private http: HttpClient) {}

  listarProyectos(token: string): Observable<{ proyectos: IProyecto[] }> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<{ proyectos: IProyecto[] }>(this.apiUrl, { headers });
  }

  crearProyecto(nombre: string, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.apiUrl, { nombre }, { headers });
  }

  eliminarProyecto(id: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }
}
