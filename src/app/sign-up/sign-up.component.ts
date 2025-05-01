import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // ✅ Tu dois ajouter ça

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent {
  user = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  message: string = '';       // ✅ Message à afficher (succès ou erreur)
  messageColor: string = '';  // ✅ Couleur du message (vert pour succès, rouge pour erreur)

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('http://localhost:5500/api/auth/signup', this.user).subscribe(
      response => {
        this.message = 'Inscription réussie ! Vous pouvez maintenant vous connecter.';
        this.messageColor = 'green';
        
        setTimeout(() => {
          this.router.navigate(['/sign-in']);
        }, 2000); // ✅ On attend 2 secondes avant de rediriger
      },
      error => {
        this.message = 'Échec de l\'inscription. Veuillez réessayer.';
        this.messageColor = 'red';
        console.error('Erreur d\'inscription', error);

        // ✅ Effacer le message d'erreur après 4 secondes
        setTimeout(() => {
          this.message = '';
        }, 4000);
      }
    );
  }
}
