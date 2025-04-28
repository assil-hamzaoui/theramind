import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css'],

})
export class Page5Component {
  constructor(private router: Router) {}

  selectOption(status: string) {
    // Store the relationship status in localStorage
    localStorage.setItem('relationshipStatus', status);

    // Navigate to page9 instead of page6
    this.router.navigate(['/page9']);
  }

  goBack() {
    this.router.navigate(['/page4']);
  }
}
