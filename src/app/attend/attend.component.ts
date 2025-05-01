import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attend',
  templateUrl: './attend.component.html',
  styleUrls: ['./attend.component.css']
})
export class AttendComponent implements OnInit {
  showPaymentModal = false;
  processingMessage = '';
  private audio = new Audio();

  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {
    // Load and play the sound
    this.audio.src = 'assets/phone.mp3'; // ✅ path relative to /src/assets
    this.audio.load();
    this.audio.loop = true;

    // Try playing it (will only work if autoplay is permitted)
    this.audio.play().catch(err => {
      console.warn('Autoplay blocked. Waiting for user interaction.', err);
    });

    // Show the payment modal after 4 seconds
    setTimeout(() => {
      this.showPaymentModal = true;
    }, 9000);
  }

  onProceedToPayment() {
    this.processingMessage = 'Wait!,Processing to Payment...';

    setTimeout(() => {
      this.router.navigate(['/pricing-card']);
      this.showPaymentModal = true;
    }, 5000);
  }

  goBack() {
    this.audio.pause(); // Optional: stop sound on back
    this.location.back();
  }
}
