import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Expertise {
  name: string;
}

@Component({
  selector: 'app-rdvs',
  templateUrl: './rdvs.component.html',
  styleUrls: ['./rdvs.component.css']
})
export class RdvsComponent implements OnInit {
  therapist = {
    name: 'Edouard Guidez',
    title: 'Psychologue',
    image: 'assets/images/edouard-guidez.jpg',
    address: '108 Rue Ordener, 75018 Paris',
    acceptsNewPatients: true,
    presentation: {
      description: 'Psychologue et psychanalyste, je vous reçois dans mon cabinet chaque samedi pour des consultations d\'orientation psychanalytique.\n\nAvec une solide expérience en psychiatrie et pédopsychiatrie, j\'accueille les enfants, adolescents et adultes.\nMon approche s\'inspire des enseignements de Jacques Lacan, en explorant l\'inconscient et en cherchant à',
      languages: ['Anglais', 'Français'],
      education: [
        {
          year: '2021',
          degree: 'Master Recherche en psychologie clinique et pathologique - UFR d\'études psychanalytiques - Paris Cité (Paris 7)'
        },
        {
          year: '2011',
          degree: 'Master en Sciences humaines et sociales - psychologie - Université Catholique de Lille'
        }
      ],
      experience: [
        {
          period: '2015 - 2024',
          position: 'Clinicien - Centre Hospitalier de Denain - Denain - pédopsychiatrie'
        },
        {
          position: 'Cabinet - Paris'
        }
      ],
      associations: [
        'Membre - Association Lacanienne Internationale (ALI)'
      ],
      schedule: {
        openingHours: 'Samedi : 08h00-20h30',
        emergency: 'En cas d\'urgence, contactez le 15 (Samu)',
        phone: '06 72 81 56 34'
      },
      pricing: {
        consultation: '30 € à 60 €',
        notice: 'Ces honoraires vous sont communiqués à titre indicatif par le soignant. Ils peuvent varier selon le type de soins finalement réalisés en cabinet, le nombre de consultations et les actes additionnels nécessaires. En cas de dépassement, le soignant doit en avertir préalablement le patient.'
      }
    },
    payment: {
      insurance: 'Consultation non remboursée par l\'Assurance Maladie',
      methods: ['Chèques et espèces'],
      cards: 'Cartes bancaires non acceptées'
    },
    expertise: [
      { name: 'Psychanalyse' },
      { name: 'Psychologie de l\'adolescent' },
      { name: 'Psychologie de l\'adulte' },
      { name: 'Psychologie de l\'enfant' },
      { name: 'Psychothérapie' },
      { name: 'Pédopsychologie' },
      { name: 'Thérapie analytique' },
      { name: 'Thérapie d\'orientation psychanalytique' }
    ]
  };

  activeTab: 'essential' | 'map' | 'presentation' | 'schedule' | 'pricing' = 'essential';

  constructor(private router: Router) {}

  ngOnInit() {
    // Load selected therapist data if available
    const savedTherapist = localStorage.getItem('selectedTherapist');
    if (savedTherapist) {
      const selectedTherapist = JSON.parse(savedTherapist);
      // Update only the basic info, keeping the detailed presentation data
      this.therapist = {
        ...this.therapist,
        name: selectedTherapist.name,
        title: selectedTherapist.title,
        image: selectedTherapist.image,
        address: selectedTherapist.address
      };
    }
  }

  setActiveTab(tab: 'essential' | 'map' | 'presentation' | 'schedule' | 'pricing') {
    this.activeTab = tab;

    // Scroll to the section after a brief delay to allow for content to render
    setTimeout(() => {
      const element = document.getElementById(tab);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  bookAppointment() {
    // Store booking information and navigate to booking confirmation
    localStorage.setItem('booking', JSON.stringify({
      therapistName: this.therapist.name,
      therapistAddress: this.therapist.address
    }));
    this.router.navigate(['/rdvl']);
  }

  sendMessage() {
    this.router.navigate(['/messages']);
  }

  goBack() {
    this.router.navigate(['/page9']);
  }
}

