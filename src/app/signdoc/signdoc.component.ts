import { Component } from '@angular/core';

@Component({
  selector: 'app-signdoc',
  templateUrl: './signdoc.component.html',
  styleUrls: ['./signdoc.component.css']
})
export class SigndocComponent {
  formData: FormData = {
    firstName: '',
    lastName: '',
    postalCode: '',
    phone: '',
    specialty: '',
    email: '',
    requestType: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    if (this.isFormValid()) {
      alert('Formulaire envoyé avec succès!');
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }

  isFormValid(): boolean {
    return Object.values(this.formData).every(field => field.trim() !== '');
  }
}

interface FormData {
  firstName: string;
  lastName: string;
  postalCode: string;
  phone: string;
  specialty: string;
  email: string;
  requestType: string;
}

