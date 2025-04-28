import { Component } from '@angular/core';
import { Router } from '@angular/router'; // For navigation
import { HttpClient } from '@angular/common/http'; // For making HTTP requests

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  // Define variables for the form
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  // API URL for the backend (replace with your actual backend URL)
  apiUrl: string = 'http://localhost:5500/api/auth/login'; // Adjust this URL based on your backend

  constructor(
    private router: Router,
    private http: HttpClient // Injecting HttpClient to make requests
  ) {}

  // Function to submit the form
  onSubmit() {
    if (this.email && this.password) {
      const formData = {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe
      };

      // Sending the form data to the backend via HTTP POST request
      this.http.post(this.apiUrl, formData).subscribe(
        (response: any) => {
          if (response.success) {
            // Redirect to dashboard or home page if login is successful
            this.router.navigate(['/dashboard']);
          } else {
            alert('Email or password is incorrect');
          }
        },
        (error) => {
          alert('An error occurred while logging in');
          console.error(error);
        }
      );
    } else {
      alert('Please fill in all the fields correctly');
    }
  }
}
