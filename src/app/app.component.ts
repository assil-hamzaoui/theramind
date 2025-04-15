import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isLoading: boolean = true; // Define isLoading as a boolean

  constructor() {
    setTimeout(() => {
      this.isLoading = false; // After 3 seconds, show the Home component
    }, 3000);

  }

}

