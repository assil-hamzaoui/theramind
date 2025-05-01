import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})
export class ResetpassComponent {
  password: string = '';
  confirmPassword: string = '';
  message: string = '';
  error: string = '';
  token: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.token = this.route.snapshot.paramMap.get('token')!;
  }

  onSubmit() {
    if (!this.password || !this.confirmPassword) {
      this.error = 'Veuillez remplir tous les champs.';
      this.clearMessages();
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.error = 'Les mots de passe ne correspondent pas.';
      this.clearMessages();
      return;
    }

    this.http.post(`http://localhost:5500/api/auth/reset-password/${this.token}`, { password: this.password })
      .subscribe({
        next: (res: any) => {
          this.message = res.message || 'Mot de passe réinitialisé avec succès!';
          setTimeout(() => {
            this.router.navigate(['/sign-in']);
          }, 1000); // Redirection après 2 secondes
          this.clearMessages();
        },
        error: (err) => {
          this.error = err.error.message || 'Erreur lors de la réinitialisation du mot de passe.';
          this.clearMessages();
        }
      });
  }

  clearMessages() {
    setTimeout(() => {
      this.message = '';
      this.error = '';
    }, 5000);
  }
}


