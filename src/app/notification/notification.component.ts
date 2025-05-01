import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  currentMessage: string = '';
  showNotification = false;
  notificationCount = 0;
  audio = new Audio('assets/notif.mp3');

  messages = [
    '👋 Welcome to Theramind',
    '🔔 You have 1 new reminder',
    '📅 Check today’s schedule',
    '💬 New message from your psychologist',
    '✅ Task marked as complete',
    '🌿 Take a deep breath now',
    '📌 Tip of the day: Stay hydrated',
    '🧠 Mental exercise available',
    '⏰ Break time suggestion',
    '🙌 You’re doing great!'
  ];

  ngOnInit() {
    this.startNotifications();
  }

  startNotifications() {
    let index = 0;

    const showNext = () => {
      this.currentMessage = this.messages[index];
      this.notificationCount++;
      this.playSound();
      this.showNotification = true;

      // Masquer après 4s
      setTimeout(() => {
        this.showNotification = false;
      }, 4000);

      // Prochaine notif dans 6s
      index = (index + 1) % this.messages.length;
      setTimeout(showNext, 10000);
    };

    // Commencer après 2s
    setTimeout(showNext, 8000);
  }

  playSound() {
    this.audio.currentTime = 0;
    this.audio.play();
  }
}
