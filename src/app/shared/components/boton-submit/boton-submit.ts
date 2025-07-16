import { Component, input } from '@angular/core';

@Component({
  selector: 'app-boton-submit',
  standalone: false,
  templateUrl: './boton-submit.html',
  styleUrl: './boton-submit.css'
})
export class BotonSubmit {
  @input()() text: string = 'Enviar';
}
