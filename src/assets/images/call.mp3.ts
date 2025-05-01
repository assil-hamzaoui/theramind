import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-waiting',
  templateUrl: './call-waiting.component.html',
  styleUrls: ['./call-waiting.component.css']
})
export class CallWaitingComponent implements OnInit {
  showPaymentModal = false;

  ngOnInit() {
    const audio = new Audio('assets/audio/messenger-call.mp3');
    audio.loop = true;
    audio.play().catch(error => console.error(error));

    setTimeout(() => {
      this.showPaymentModal = true;
      audio.pause();
    }, 3000);
  }
}
