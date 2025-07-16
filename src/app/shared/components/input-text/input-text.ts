import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-input-text',
  standalone: false,
  templateUrl: './input-text.html',
  styleUrl: './input-text.css'
})
export class InputText {
  @Input() formControl!: FormControl;
  @Input() placeholder: string = '';
}
