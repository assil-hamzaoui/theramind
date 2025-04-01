import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  getTimestamp(index: number): string {
    const timestamps = ['3 hrs ago', '1 hr ago', '2 min ago', '3 hrs ago'];
    return timestamps[index] || 'Just now';
  }
}
