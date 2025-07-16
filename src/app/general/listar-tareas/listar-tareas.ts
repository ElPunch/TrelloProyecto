import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../services/tarea';
import { ITarea } from '../../services/interfaces/itarea';

@Component({
  selector: 'app-listar-tareas',
  standalone: false,
  templateUrl: './listar-tareas.html',
  styleUrl: './listar-tareas.css'
})
export class ListarTareas implements OnInit{
  tareas: ITarea[] = [];

  constructor(private tareaService: Tarea) {}

  ngOnInit(): void {
    this.tareaService.getTareas().subscribe({
      next: data => this.tareas = data.tareas,
      error: err => console.error(err)
    });
  }
}
