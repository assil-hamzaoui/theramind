import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page3',

  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
  selectedAge: string = '';
  ageRanges: string[] = [
    '13-17 years old',
    '18-24 years old',
    '25-34 years old',
    '35-44 years old',
    '45-54 years old',
    '55-64 years old',
    '65+ years old'
  ];

  constructor(private router: Router) {}

  nextStep() {
    if (this.canProceed()) {
      console.log('Selected age:', this.selectedAge);
      this.router.navigate(['/page4']);
    }
  }

  canProceed(): boolean {
    return this.selectedAge !== '';
  }
}
