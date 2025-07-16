import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { Usuario } from '../../services/usuario';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
   formRegister: FormGroup;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private usuarioService: Usuario,
    private router: Router
  ) {
    this.formRegister = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.formRegister.valid) {
    const { email, contrasena } = this.formRegister.value;
    this.usuarioService.register(email, contrasena).subscribe({
      next: () => {
        this.router.navigate(['/usuario/dashboard']); // redirige al dashboard
      },
      error: err => {
        this.error = err.error?.error || 'Error al registrar';
      }
      });
    }
  }
}
