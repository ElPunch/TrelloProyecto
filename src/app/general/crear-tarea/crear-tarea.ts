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
      proyecto_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe({
      next: data => this.proyectos = data.proyectos,
      error: err => console.error(err)
    });
  }

  onSubmit() {
    if (this.formTarea.valid) {
      this.tareaService.postTarea(this.formTarea.value).subscribe({
        next: () => this.router.navigate(['/general/listar-tareas']),
        error: err => this.error = err.error?.error || 'Error al crear tarea'
      });
    }
  }

}
