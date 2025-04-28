import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component {
  showMoreOptions = false;

  constructor(private router: Router) {}

  toggleMoreOptions() {
    this.showMoreOptions = !this.showMoreOptions;
  }

  async selectOption(option: string) {
    try {
      // Store the sexual orientation
      localStorage.setItem('sexualOrientation', option);
      console.log('Stored orientation:', option);

      // Navigate based on selection
      if (option === 'Straight') {
        console.log('Navigating to page5...');
        await this.router.navigate(['/page5']);
      } else {
        console.log('Navigating to page6...');
        await this.router.navigate(['/page6']);
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }
}
