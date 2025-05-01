import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetPasswordComponent {
  email = '';
  message = '';
  error = '';

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    // Validation de l'email
    if (!this.email || !this.email.includes('@')) {
      this.error = 'Veuillez entrer une adresse email valide.';
      this.clearMessageAfterDelay();
      return;
    }

    // Envoi de la requête HTTP pour demander un lien de réinitialisation
    this.http.post<any>('http://localhost:5500/api/auth/forgot-password', { email: this.email })
      .subscribe({
        next: (response) => {
          this.message = response.message || 'Lien de réinitialisation envoyé.';

          // Extraire le token du lien de réinitialisation
          const token = response.resetLink?.split('/').pop();

          // Vérifier si le token est valide avant de rediriger
          if (token) {
            setTimeout(() => {
              // Rediriger vers la page de réinitialisation avec le token
              this.router.navigate([`/resetpass/${token}`]);
            }, 1000); // Redirection après 1s
          }

          this.clearMessageAfterDelay();
        },
        error: (err) => {
          // Gestion des erreurs, affichage du message d'erreur
          this.error = err.error.message || 'Une erreur est survenue, veuillez réessayer plus tard.';
          this.clearMessageAfterDelay();
        }
      });
  }

  // Méthode pour effacer les messages après un délai
  clearMessageAfterDelay() {
    setTimeout(() => {
      this.message = '';
      this.error = '';
    }, 5000); // Effacer les messages après 5s
  }
}
