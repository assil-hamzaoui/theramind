import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface DateItem {
  date: string;
  timeSlots: TimeSlot[];
  isExpanded: boolean;
}

@Component({
  selector: 'app-rdvl',
  templateUrl: './rdvl.component.html',
  styleUrls: ['./rdvl.component.css']
})
export class RdvlComponent implements OnInit {
  pageTitle = 'Prenez votre rendez-vous en ligne';
  subtitle = 'Renseignez les informations suivantes';

  therapist = {
    name: 'M. Edouard Guidez',
    title: 'Psychologue',
    image: 'assets/images/edouard-guidez.jpg'
  };

  appointmentDetails = {
    patientName: 'Pour ali bejaoui',
    address: '108 Rue Ordener, 75018 Paris',
    type: 'Première séance de psychologie'
  };

  dates: DateItem[] = [
    {
      date: 'Samedi 26 avril',
      timeSlots: [
        { time: '09:30', available: true },
        { time: '11:45', available: true },
        { time: '14:15', available: true },
        { time: '17:15', available: true },
        { time: '19:15', available: true }
      ],
      isExpanded: true
    },
    {
      date: 'Samedi 3 mai',
      timeSlots: [],
      isExpanded: false
    },
    {
      date: 'Samedi 10 mai',
      timeSlots: [],
      isExpanded: false
    },
    {
      date: 'Samedi 17 mai',
      timeSlots: [],
      isExpanded: false
    },
    {
      date: 'Samedi 24 mai',
      timeSlots: [],
      isExpanded: false
    }
  ];

  selectedDate: DateItem | null = null;
  selectedTimeSlot: TimeSlot | null = null;

  constructor(private router: Router) {}

  ngOnInit() {}

  toggleDateExpansion(date: DateItem) {
    // Fermer tous les autres dates
    this.dates.forEach(d => {
      if (d !== date) {
        d.isExpanded = false;
      }
    });
    date.isExpanded = !date.isExpanded;
  }

  selectTimeSlot(date: DateItem, slot: TimeSlot) {
    if (!slot.available) return;
    this.selectedDate = date;
    this.selectedTimeSlot = slot;
  }

  isSlotSelected(date: DateItem, slot: TimeSlot): boolean {
    return this.selectedDate === date && this.selectedTimeSlot === slot;
  }

  goBack() {
    this.router.navigate(['/rdvs']);
  }

  loadMoreDates() {
    // Implémenter le chargement de dates supplémentaires si nécessaire
  }
}
