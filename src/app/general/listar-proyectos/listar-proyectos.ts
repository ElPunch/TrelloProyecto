import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../services/proyecto';
import { IProyecto } from '../../services/interfaces/iproyecto';

@Component({
  selector: 'app-listar-proyectos',
  standalone: false,
  templateUrl: './listar-proyectos.html',
  styleUrl: './listar-proyectos.css'
})
export class ListarProyectos implements OnInit{
  proyectos: IProyecto[] = [];

  constructor(private proyectoService: Proyecto) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.proyectoService.listarProyectos(token).subscribe({
        next: (data: { proyectos: IProyecto[] }) => this.proyectos = data.proyectos,
        error: (err: any) => console.error(err)
      });
    }
  }
}
