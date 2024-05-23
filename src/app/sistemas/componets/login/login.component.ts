import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Corregido a 'styleUrls' y usando un array
})
export class LoginComponent {
  email: string = 'test@example.com';
  password: string = '12345';
  message: string = '';  // Añadir una nueva propiedad para el mensaje

  constructor() { }

  login() {
    console.log(`Intento de inicio de sesión con email: ${this.email} y contraseña: ${this.password}`);
    // Simular un inicio de sesión exitoso
    this.message = "Inicio de sesión exitoso";
  }
}
