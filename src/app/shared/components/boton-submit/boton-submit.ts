import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-submit',
  standalone: false,
  templateUrl: './boton-submit.html',
  styleUrl: './boton-submit.css'
})
export class BotonSubmit {
  @Input() text: string = 'Enviar';
}
