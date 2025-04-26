import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent {
  goToVideo() {
    throw new Error('Method not implemented.');
  }
  apropos: any;

}
