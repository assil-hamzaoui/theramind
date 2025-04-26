import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sad.component.html',
  styleUrls: ['./sad.component.css']
})
export class SadComponent {
  constructor() { }
}