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
      question: 'Comment prendre rendez-vous avec un thérapeute ?',
      answer: 'Pour prendre rendez-vous, connectez-vous à votre compte, naviguez vers la section "Rendez-vous", choisissez un thérapeute disponible et sélectionnez un créneau horaire qui vous convient.'
    },
    {
      question: 'Comment se déroule une séance en ligne ?',
      answer: 'Les séances en ligne se déroulent via notre plateforme sécurisée de vidéoconférence. Assurez-vous d\'avoir une connexion internet stable et un endroit calme. Connectez-vous 5 minutes avant votre rendez-vous.'
    },
    {
      question: 'Quels sont les moyens de paiement acceptés ?',
      answer: 'Nous acceptons les cartes bancaires (Visa, Mastercard), PayPal, et certaines mutuelles. Les paiements sont sécurisés et cryptés.'
    },
    {
      question: 'Comment annuler ou reporter un rendez-vous ?',
      answer: 'Vous pouvez annuler ou reporter un rendez-vous jusqu\'à 24h avant la séance depuis votre espace personnel. Au-delà de ce délai, contactez notre service client.'
    },
    {
      question: 'La confidentialité est-elle garantie ?',
      answer: 'Oui, nous garantissons la confidentialité totale de vos données et de vos séances. Nos systèmes sont cryptés et conformes au RGPD.'
    }
  ];

  categories = [
    {
      title: 'Premiers pas',
      icon: '🚀',
      description: 'Découvrez comment débuter avec notre plateforme'
    },
    {
      title: 'Rendez-vous',
      icon: '📅',
      description: 'Gérez vos consultations et votre agenda'
    },
    {
      title: 'Paiement et facturation',
      icon: '💳',
      description: 'Informations sur les tarifs et modes de paiement'
    },
    {
      title: 'Support technique',
      icon: '🔧',
      description: 'Résolution des problèmes techniques'
    },
    {
      title: 'Confidentialité',
      icon: '🔒',
      description: 'Protection de vos données personnelles'
    }
  ];
}
