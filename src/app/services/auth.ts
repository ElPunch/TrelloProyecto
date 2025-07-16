import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  login(data: { email: string; contrasena: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  register(data: { nombre: string; email: string; contrasena: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, data);
  }

  cambiarContrasena(data: any, token: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/cambiar-contrasena`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}
