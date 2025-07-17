import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../services/proyecto';
import { IProyecto } from '../../../services/interfaces/iproyecto';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit{
  proyectos: IProyecto[] = [];
  formVisible: 'proyecto' | 'tarea' | null = null;

  constructor(private proyectoService: Proyecto) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

  if (token) {
    this.proyectoService.listarProyectos(token).subscribe({
      next: (data: { proyectos: IProyecto[] }) => {
        this.proyectos = data.proyectos;
      },
      error: (err: any) => console.error('Error al obtener proyectos:', err)
    });
  } else {
    console.error('Token no encontrado');
  }
}
   mostrarFormulario(tipo: 'proyecto' | 'tarea') {
    this.formVisible = this.formVisible === tipo ? null : tipo;
  }

}
