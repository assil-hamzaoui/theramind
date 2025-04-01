// signup.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent {
  constructor(private router: Router) {}

  onSubmit() {
    // Logique pour soumettre le formulaire ici (par exemple, envoyer les données au serveur)

    // Après la soumission, redirige vers la page "signin"
    this.router.navigate(['/signin']);
  }
}
