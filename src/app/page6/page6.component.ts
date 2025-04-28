import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css'],

})
export class Page6Component {
  constructor(private router: Router) {}

  selectOption(preference: string) {
    // Store the LGBTQ+ specialization preference
    localStorage.setItem('lgbtqSpecialization', preference);

    // Navigate based on selection
    if (preference === 'Yes') {
      this.router.navigate(['/page7']); // Go to pronouns page if Yes is selected
    } else {
      this.router.navigate(['/page8']); // Skip pronouns page if No is selected
    }
  }
}
