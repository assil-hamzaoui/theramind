import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class SectionComponent implements OnInit, OnDestroy {
  messagesCount: number = 427307757;
  therapistsCount: number = 28573;
  helpedCount: number = 5563156;

  private updateInterval: any;
  private readonly intervalTime = 2000; // Update every 2 seconds

  currentTestimonialIndex: number = 0;
  totalTestimonials: number = 3;

  ngOnInit() {
    this.startCounters();

    // Add click handlers for nav dots
    const dots = document.querySelectorAll('.nav-dot');
    dots.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const slideNumber = target.getAttribute('data-slide');
        if (slideNumber) {
          this.showTestimonial(parseInt(slideNumber) - 1);
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
  }

  private startCounters() {
    this.updateInterval = setInterval(() => {
      // Update messages count (1-10 new messages)
      const newMessages = Math.floor(Math.random() * 10) + 1;
      this.animateNumberChange('messages', this.messagesCount, this.messagesCount + newMessages);
      this.messagesCount += newMessages;

      // Update therapists count (10% chance to add 1)
      if (Math.random() < 0.1) {
        this.animateNumberChange('therapists', this.therapistsCount, this.therapistsCount + 1);
        this.therapistsCount += 1;
      }

      // Update helped count (0-2 new people helped)
      const newHelped = Math.floor(Math.random() * 3);
      if (newHelped > 0) {
        this.animateNumberChange('helped', this.helpedCount, this.helpedCount + newHelped);
        this.helpedCount += newHelped;
      }
    }, this.intervalTime);
  }

  private animateNumberChange(elementId: string, oldValue: number, newValue: number) {
    const element = document.querySelector(`[data-counter="${elementId}"]`);
    if (element) {
      element.classList.add('changed');
      setTimeout(() => {
        element.classList.remove('changed');
      }, 300);
    }
  }

  // Format numbers with commas
  formatNumber(num: number): string {
    return num.toLocaleString();
  }

  showNextTestimonial() {
    // Hide current testimonial
    const currentSlide = document.querySelector('.testimonial-slide.active');
    const currentDot = document.querySelector('.nav-dot.active');

    if (currentSlide && currentDot) {
      currentSlide.classList.remove('active');
      currentDot.classList.remove('active');
    }

    // Update index
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.totalTestimonials;

    // Show next testimonial
    const nextSlide = document.getElementById(`testimonial-${this.currentTestimonialIndex + 1}`);
    const nextDot = document.querySelector(`[data-slide="${this.currentTestimonialIndex + 1}"]`);

    if (nextSlide && nextDot) {
      nextSlide.classList.add('active');
      nextDot.classList.add('active');
    }
  }

  showTestimonial(index: number) {
    // Hide current testimonial
    const currentSlide = document.querySelector('.testimonial-slide.active');
    const currentDot = document.querySelector('.nav-dot.active');

    if (currentSlide && currentDot) {
      currentSlide.classList.remove('active');
      currentDot.classList.remove('active');
    }

    // Update index
    this.currentTestimonialIndex = index;

    // Show selected testimonial
    const selectedSlide = document.getElementById(`testimonial-${index + 1}`);
    const selectedDot = document.querySelector(`[data-slide="${index + 1}"]`);

    if (selectedSlide && selectedDot) {
      selectedSlide.classList.add('active');
      selectedDot.classList.add('active');
    }
  }
}

