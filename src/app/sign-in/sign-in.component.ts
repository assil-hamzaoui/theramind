import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  user = {
    email: '',
    password: '',
    rememberMe: false
  };
  message = '';
  messageType = ''; // 'success' or 'error'

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const loginUrl = 'http://localhost:5500/api/auth/login';

    this.http.post(loginUrl, this.user).subscribe(
      (response: any) => {
        console.log('Login successful', response);

        // Store the token in localStorage or sessionStorage based on rememberMe
        if (this.user.rememberMe) {
          localStorage.setItem('authToken', response.token); // Persist token for longer time
        } else {
          sessionStorage.setItem('authToken', response.token); // Store for the session
        }

        // Redirect user based on role
        if (response.redirectTo === '/admin/dashboard') {
          this.message = '✅ Bienvenue administrateur ! ';
          this.messageType = 'success';
          setTimeout(() => {
            this.message = '';
            this.router.navigate(['/dash']);
          }, 1500);
        } else {
          this.message = '✅ Bienvenue sur Theramind ! Connexion réussie.';
          this.messageType = 'success';
          setTimeout(() => {
            this.message = '';
            this.router.navigate(['/']);
          }, 1500);
        }
      },
      (error) => {
        console.error('Login failed', error);
        this.message = '❌ Échec de la connexion. Vérifiez vos identifiants.';
        this.messageType = 'error';

        // Clear the message after 4 seconds
        setTimeout(() => this.message = '', 3000);
      }
    );
  }
}
