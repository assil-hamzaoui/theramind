import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Therapist {
  id: number;
  name: string;
  title: string;
  image: string;
  address: string;
  hasVideo?: boolean;
  availableSlots: {
    day: string;
    date: string;
    times: string[];
  }[];
}

@Component({
  selector: 'app-page9',
  templateUrl: './page9.component.html',
  styleUrls: ['./page9.component.css']
})
export class Page9Component {
  therapists: Therapist[] = [
    {
      id: 1,
      name: 'Mme Alice LETONDEUR',
      title: 'Psychologue',
      image: 'assets/images/therapist1.jpg',
      address: '8 Rue Montbauron 78000 Versailles',
      availableSlots: [
        { day: 'mercredi', date: '23 avr.', times: [] },
        { day: 'jeudi', date: '24 avr.', times: ['12:00', '13:30', '15:00', '15:45'] },
        { day: 'vendredi', date: '25 avr.', times: [] },
        { day: 'samedi', date: '26 avr.', times: [] },
        { day: 'dimanche', date: '27 avr.', times: [] },
        { day: 'lundi', date: '28 avr.', times: [] }
      ]
    },
    {
      id: 2,
      name: 'Clémentine GACON',
      title: 'Psychologue',
      image: 'assets/images/therapist2.jpg',
      address: '76 Rue Garibaldi 69006 Lyon',
      hasVideo: true,
      availableSlots: [
        { day: 'mercredi', date: '23 avr.', times: [] },
        { day: 'jeudi', date: '24 avr.', times: [] },
        { day: 'vendredi', date: '25 avr.', times: ['15:00', '18:00'] },
        { day: 'samedi', date: '26 avr.', times: [] },
        { day: 'dimanche', date: '27 avr.', times: [] },
        { day: 'lundi', date: '28 avr.', times: [] }
      ]
    },
    {
      id: 3,
      name: 'Mme Alexandra Gey',
      title: 'Psychologue',
      image: 'assets/images/therapist3.jpg',
      address: '23 Avenue Jean Jaurès 69007 Lyon',
      availableSlots: [
        { day: 'mercredi', date: '23 avr.', times: [] },
        { day: 'jeudi', date: '24 avr.', times: [] },
        { day: 'vendredi', date: '25 avr.', times: [] },
        { day: 'samedi', date: '26 avr.', times: [] },
        { day: 'dimanche', date: '27 avr.', times: [] },
        { day: 'lundi', date: '28 avr.', times: [] }
      ]
    }
  ];

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/page5']);
  }

  goToRdvs(therapist: Therapist) {
    // Store selected therapist info if needed
    localStorage.setItem('selectedTherapist', JSON.stringify(therapist));
    this.router.navigate(['/rdvs']);
  }

  bookAppointment(therapist: Therapist, date: string, time: string) {
    localStorage.setItem('appointment', JSON.stringify({
      therapistId: therapist.id,
      therapistName: therapist.name,
      date: date,
      time: time
    }));
    this.router.navigate(['/rdvs']);
  }
}
