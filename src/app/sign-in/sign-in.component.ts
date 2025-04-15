import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Pour la navigation
import { FormBuilder, Validators, FormGroup } from '@angular/forms'; // Pour les formulaires réactifs

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup; // Formulaire réactif

  constructor(private fb: FormBuilder, private router: Router) {
    // Création du formulaire avec les validations
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Validation email
      password: ['', [Validators.required, Validators.minLength(6)]], // Validation mot de passe
      rememberMe: [false] // Option "se souvenir de moi"
    });
  }

  // Fonction pour soumettre le formulaire
  onSubmit() {
    if (this.signInForm.valid) {
      const formData = this.signInForm.value;
      console.log('Form Data:', formData);

      // Simuler un appel API pour se connecter (tu peux remplacer par un vrai appel)
      if (formData.email === 'user@example.com' && formData.password === 'password') {
        this.router.navigate(['/dashboard']); // Redirection vers le dashboard si la connexion est réussie
      } else {
        alert('Email ou mot de passe incorrect');
      }
    } else {
      alert('Veuillez remplir tous les champs correctement');
    }
  }
}
