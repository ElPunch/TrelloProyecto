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

  onSubmit() {
    if (this.formProyecto.valid) {
      this.proyectoService.postProyecto(this.formProyecto.value).subscribe({
        next: () => this.router.navigate(['/usuario/dashboard']),
        error: err => this.error = err.error?.error || 'Error al crear proyecto'
      });
    }
  }
}
