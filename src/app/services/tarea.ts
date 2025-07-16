import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITarea } from './interfaces/itarea';

@Injectable({
  providedIn: 'root'
})
export class Tarea {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  listarTareas(id_proyecto: number, token: string): Observable<{ tareas: ITarea[] }> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<{ tareas: ITarea[] }>(`${this.apiUrl}/tareas/${id_proyecto}`, { headers });
  }

  crearTarea(data: any, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/tareas`, data, { headers });
  }

  editarTarea(id: number, data: any, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/tareas/${id}`, data, { headers });
  }

  eliminarTarea(id: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiUrl}/tareas/${id}`, { headers });
  }
}
