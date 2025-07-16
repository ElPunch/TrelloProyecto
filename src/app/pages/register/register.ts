import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
   formRegister: FormGroup;
  error: string = '';

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router) {
    this.formRegister = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.formRegister.valid) {
      this.auth.register(this.formRegister.value).subscribe({
        next: () => this.router.navigate(['/login']),
        error: err => this.error = err.error?.error || 'Error al registrarse'
      });
    }
  }
}
