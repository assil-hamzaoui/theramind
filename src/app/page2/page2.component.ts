import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  showMoreOptions = false;

  toggleMoreOptions() {
    this.showMoreOptions = !this.showMoreOptions;
  }

  selectOption(option: string) {
    console.log(`Selected: ${option}`);
    // Here you would typically store the selection or proceed to the next question
  }
}
