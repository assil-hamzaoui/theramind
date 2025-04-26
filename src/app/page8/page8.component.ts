import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Therapist {
  id: number;
  name: string;
  title: string;
  image: string;
  address: string;
  availableSlots: {
    day: string;
    date: string;
    times: string[];
  }[];
}

@Component({
  selector: 'app-page8',
  templateUrl: './page8.component.html',
  styleUrls: ['./page8.component.css']
})
export class Page8Component {
  therapists: Therapist[] = [
    {
      id: 1,
      name: 'M. Edouard Guidez',
      title: 'Psychologue',
      image: 'assets/images/doctor1.jpg',
      address: '108 Rue Ordener 75018 Paris',
      availableSlots: [
        {
          day: 'mercredi',
          date: '23 avr.',
          times: []
        },
        {
          day: 'jeudi',
          date: '24 avr.',
          times: []
        },
        {
          day: 'vendredi',
          date: '25 avr.',
          times: []
        },
        {
          day: 'samedi',
          date: '26 avr.',
          times: ['09:30', '11:45', '14:15', '17:15']
        },
        {
          day: 'dimanche',
          date: '27 avr.',
          times: []
        },
        {
          day: 'lundi',
          date: '28 avr.',
          times: []
        }
      ]
    },
    {
      id: 2,
      name: 'M. Carlos Ramos',
      title: 'Psychologue',
      image: 'assets/images/doctor2.jpg',
      address: '12 Rue Rottembourg 75012 Paris',
      availableSlots: [
        {
          day: 'mercredi',
          date: '23 avr.',
          times: ['17:00', '17:45']
        },
        {
          day: 'jeudi',
          date: '24 avr.',
          times: ['10:30', '11:15', '12:00', '12:45']
        },
        {
          day: 'vendredi',
          date: '25 avr.',
          times: ['12:00', '12:45', '13:30', '14:15']
        },
        {
          day: 'samedi',
          date: '26 avr.',
          times: []
        },
        {
          day: 'dimanche',
          date: '27 avr.',
          times: []
        },
        {
          day: 'lundi',
          date: '28 avr.',
          times: []
        }
      ]
    }
  ];

  constructor(private router: Router) {}

  goToRdvs() {
    this.router.navigate(['/rdvs']);
  }

  goBack() {
    this.router.navigate(['/page7']);
  }

  bookAppointment(therapist: Therapist, date: string, time: string) {
    // Store booking information
    localStorage.setItem('booking', JSON.stringify({
      therapistId: therapist.id,
      therapistName: therapist.name,
      date: date,
      time: time
    }));

    // Navigate to confirmation page or next step
    // this.router.navigate(['/confirmation']);
  }
}
