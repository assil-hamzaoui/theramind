import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signdoc',
  templateUrl: './signdoc.component.html',
  styleUrls: ['./signdoc.component.css']
})
export class SigndocComponent {
  formData = {
    prenom: '',
    nom: '',
    codePostal: '',
    telephone: '',
    specialite: '',
    email: '',
    objet: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.successMessage = '';
    this.errorMessage = '';

    this.http.post('http://localhost:5500/api/auth/form', this.formData).subscribe({
      next: response => {
        this.successMessage = '✅Formulaire envoyé avec succès !';
        setTimeout(() => {
          this.router.navigate(['/Dashboraddoc']);
        }, 2000); // délai pour afficher le message avant redirection
      },
      error: err => {
        console.error(err);
        this.errorMessage = '❌Erreur lors de l\'envoi du formulaire. Veuillez réessayer.';
      }
    });
  }
}