import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../services/proyecto';
import { IProyecto } from '../../../services/interfaces/iproyecto';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  proyectos: IProyecto[] = [];

  constructor(private proyectoService: Proyecto) {}

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe({
      next: data => this.proyectos = data.proyectos,
      error: err => console.error(err)
    });
  }
}
