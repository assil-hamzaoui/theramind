import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient to make HTTP requests
import { Router } from '@angular/router';  // Import Router to navigate after form submission

@Component({
  selector: 'app-signdoc',
  templateUrl: './signdoc.component.html',
  styleUrls: ['./signdoc.component.css']
})
export class SigndocComponent {
  formData = {
    firstName: '',
    lastName: '',
    postalCode: '',
    phone: '',
    specialty: '',
    email: '',
    requestType: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  // Submit the form to the backend
  onSubmit() {
    // Log the form data to the console
    console.log('Form submitted:', this.formData);

    // Perform validation for form fields if needed (you can enhance validation here)
    if (this.formData.firstName && this.formData.lastName && this.formData.email) {
      // Send the form data to the backend (Node.js)
      this.http.post('http://localhost:5500/api/signup', this.formData)
        .subscribe(
          (response) => {
            console.log('Signup successful:', response);
            alert('Signup successful!');
            this.router.navigate(['/sign-in']); // Redirect after successful signup
          },
          (error) => {
            console.error('Signup error:', error);
            alert('There was an error during signup.');
          }
        );
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
