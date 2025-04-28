import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Make sure to import HttpClient
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  // Inject HttpClient in the constructor
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    // Log form data to console when the form is submitted
    console.log('Form submitted:', this.formData);

    // Validate if passwords match
    if (this.formData.password !== this.formData.confirmPassword) {
      alert('Passwords do not match!');
    } else {
      // Send the form data to the backend API (make sure the backend is running on this URL)
      this.http.post('http://localhost:5500/api/signup', this.formData).subscribe(
        (response) => {
          console.log('Signup successful:', response);
          alert('Signup successful!');
          this.router.navigate(['/sign-in']); // Redirect to sign-in page after successful signup
        },
        (error) => {
          console.error('Signup error:', error);
          alert('There was an error during signup. Please try again.');
        }
      );
    }
  }
}

