import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  formLogin: FormGroup;
  error: string = '';

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      this.auth.login(this.formLogin.value).subscribe({
        next: () => this.router.navigate(['/usuario/dashboard']),
        error: err => this.error = err.error?.error || 'Error al iniciar sesión'
      });
    }
  }
}
