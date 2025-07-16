import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from '../../services/proyecto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-proyecto',
  standalone: false,
  templateUrl: './crear-proyecto.html',
  styleUrl: './crear-proyecto.css'
})
export class CrearProyecto {
  formProyecto: FormGroup;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private proyectoService: Proyecto,
    private router: Router
  ) {
    this.formProyecto = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['']
    });
  }

  onSubmit(): void {
  if (this.formProyecto.valid) {
    const token = localStorage.getItem('token');
    if (token) {
      const nombre = this.formProyecto.value.nombre;
      this.proyectoService.crearProyecto(nombre, token).subscribe({
        next: () => this.router.navigate(['/usuario/dashboard']),
        error: (err: any) => {
          this.error = err.error?.error || 'Error al crear proyecto';
        }
      });
    } else {
      this.error = 'Token no disponible';
    }
  }
}
}
