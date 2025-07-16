import { Component, input } from '@angular/core';
import { ITarea } from '../../../services/interfaces/itarea';

@Component({
  selector: 'app-card-tarea',
  standalone: false,
  templateUrl: './card-tarea.html',
  styleUrl: './card-tarea.css'
})
export class CardTarea {
  @input()() tarea!: ITarea;
}
