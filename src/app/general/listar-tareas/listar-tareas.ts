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
  idProyecto: number = 1;

  constructor(private tareaService: Tarea) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token && this.idProyecto) {
      this.tareaService.listarTareas(this.idProyecto, token).subscribe({
        next: (data: { tareas: ITarea[] }) => this.tareas = data.tareas,
        error: (err: any) => console.error(err)
      });
    }
  }
}
