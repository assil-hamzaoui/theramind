import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetPasswordComponent {
  email: string = '';
  message: string = '';

  onSubmit() {
    if (this.email) {
      this.message = `A reset link has been sent to ${this.email}`;
      this.email = ''; // Clear input field after submission
    }
  }
}
