import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.css']
})
export class Page7Component {
  constructor(private router: Router) {}

  selectPronouns(pronouns: string) {
    // Store the selected pronouns in localStorage
    localStorage.setItem('pronouns', pronouns);

    // Navigate to the next page
    this.router.navigate(['/page8']);
  }

  goBack() {
    // Navigate back to the previous page
    this.router.navigate(['/page6']);
  }
}
