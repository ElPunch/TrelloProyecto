import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarea } from '../../services/tarea';
import { Proyecto } from '../../services/proyecto';
import { Router } from '@angular/router';
import { IProyecto } from '../../services/interfaces/iproyecto';


@Component({
  selector: 'app-crear-tarea',
  standalone: false,
  templateUrl: './crear-tarea.html',
  styleUrl: './crear-tarea.css'
})
export class CrearTarea implements OnInit{
  formTarea: FormGroup;
  proyectos: IProyecto[] = [];
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private tareaService: Tarea,
    private proyectoService: Proyecto,
    private router: Router
  ) {
    this.formTarea = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: [''],
      proyecto_id: ['', Validators.required],
      nombre_categoria: ['To Do'],
      nombre_estatus: ['sin empezar']
    });
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.proyectoService.listarProyectos(token).subscribe({
        next: (data: { proyectos: IProyecto[] }) => this.proyectos = data.proyectos,
        error: (err: any) => console.error(err)
      });
    }
  }

  onSubmit(): void {
    if (this.formTarea.valid) {
      const token = localStorage.getItem('token');
      if (token) {
        this.tareaService.crearTarea(this.formTarea.value, token).subscribe({
          next: () => this.router.navigate(['/general/listar-tareas']),
          error: (err: any) =>
            this.error = err.error?.error || 'Error al crear tarea'
        });
      }
    }
  }
}
