
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aide.component.html',
  styleUrls: ['./aide.component.css']
})
export class AideComponent {
  selectedQuestion: string | null = null;

  toggleQuestion(question: string) {
    this.selectedQuestion = this.selectedQuestion === question ? null : question;
  }

  faqs = [
    {
      question: 'How do I schedule an appointment with a therapist?',
      answer: 'To schedule an appointment, log into your account, navigate to the "Appointments" section, choose an available therapist, and select a time slot that works for you. You can filter therapists by specialty, availability, and ratings to find the best match for your needs.'
    },
    {
      question: 'What happens during an online therapy session?',
      answer: 'Online sessions take place through our secure video conferencing platform. Make sure you have a stable internet connection and a quiet place. Log in 5 minutes before your appointment. Your therapist will guide you through the session, which typically lasts 45-50 minutes. You can share concerns, ask questions, and work together on strategies for your mental well-being.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept major credit cards (Visa, Mastercard, American Express), PayPal, and many insurance plans. All payments are secure and encrypted. Some plans may be eligible for HSA/FSA payments. Check our pricing page for current rates and package discounts.'
    },
    {
      question: 'How do I cancel or reschedule an appointment?',
      answer: 'You can cancel or reschedule an appointment up to 24 hours before the session from your personal dashboard. Go to "My Appointments" and select the reschedule or cancel option. For cancellations within 24 hours, please contact our customer service team directly for assistance.'
    },
    {
      question: 'Is my privacy guaranteed?',
      answer: 'Yes, we guarantee complete confidentiality of your data and sessions. Our systems are encrypted and HIPAA compliant. Your therapist is bound by professional ethics and legal requirements to maintain your privacy. You can review our detailed privacy policy to learn more about how we protect your information.'
    },
    {
      question: 'Can I switch therapists if I\'m not satisfied?',
      answer: 'Absolutely. We understand that finding the right therapist is important. If you feel your current therapist isn\'t the right fit, you can request a change at any time through your account settings or by contacting our support team. There\'s no additional charge for switching therapists.'
    }
  ];

  categories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      description: 'Learn how to begin with our platform'
    },
    {
      title: 'Appointments',
      icon: '📅',
      description: 'Manage your consultations and schedule'
    },
    {
      title: 'Billing & Payments',
      icon: '💳',
      description: 'Information on pricing and payment methods'
    },
    {
      title: 'Technical Support',
      icon: '🔧',
      description: 'Troubleshooting and technical assistance'
    },
    {
      title: 'Privacy & Security',
      icon: '🔒',
      description: 'Protection of your personal information'
    },
    {
      title: 'Therapy Resources',
      icon: '📖',
      description: 'Articles, worksheets, and self-help tools'
    }
  ];
}