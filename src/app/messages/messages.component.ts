import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

interface Message {
  text: string;
  from: 'therapist' | 'patient';
  timestamp: Date;
  status?: 'sent' | 'delivered' | 'seen';
  type?: 'text' | 'meet';
  meetLink?: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  messages: Message[] = [];
  newMessage: string = '';
  isTyping: boolean = false;
  showMeetModal: boolean = false;
  currentMeetLink: string = '';

  therapistResponses: string[] = [
    "I understand how you're feeling. Can you tell me more about that?",
    "That sounds challenging. How long have you been experiencing this?",
    "It's perfectly normal to feel this way. Let's explore these feelings together.",
    "Thank you for sharing that with me. How does this affect your daily life?",
    "I'm here to support you. What would be most helpful for you right now?"
  ];

  ngOnInit(): void {
    const meetLink = this.generateMeetLink();
    // Initial messages
    this.messages = [
      { 
        text: 'Hello! How are you feeling today?', 
        from: 'therapist', 
        timestamp: new Date(Date.now() - 120000),
        status: 'seen'
      },
      { 
        text: "I've been having some difficult thoughts lately...", 
        from: 'patient', 
        timestamp: new Date(Date.now() - 60000),
        status: 'seen'
      },
      { 
        text: "I understand. Let's have a video consultation to discuss this in detail.", 
        from: 'therapist', 
        timestamp: new Date(),
        status: 'seen'
      },
      {
        text: 'Click here to join our secure video consultation',
        from: 'therapist',
        timestamp: new Date(),
        status: 'seen',
        type: 'meet',
        meetLink: meetLink
      }
    ];
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = 
        this.scrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  generateMeetLink(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let meetId = '';
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        meetId += chars[Math.floor(Math.random() * chars.length)];
      }
      if (i < 2) meetId += '-';
    }
    return `https://meet.google.com/${meetId}`;
  }

  openMeetLink(link: string): void {
    window.open(link, '_blank');
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      // Add user message
      const message: Message = {
        text: this.newMessage,
        from: 'patient',
        timestamp: new Date(),
        status: 'sent'
      };
      this.messages.push(message);

      // Clear input
      this.newMessage = '';

      // Show typing indicator
      this.isTyping = true;

      // Simulate message being delivered
      setTimeout(() => {
        message.status = 'delivered';
      }, 1000);

      // Simulate message being seen and therapist typing
      setTimeout(() => {
        message.status = 'seen';
      }, 2000);

      // Simulate therapist response
      setTimeout(() => {
        this.isTyping = false;
        const response: Message = {
          text: this.getRandomResponse(),
          from: 'therapist',
          timestamp: new Date(),
          status: 'sent'
        };
        this.messages.push(response);
      }, 3500);
    }
  }

  private getRandomResponse(): string {
    const index = Math.floor(Math.random() * this.therapistResponses.length);
    return this.therapistResponses[index];
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}
