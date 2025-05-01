import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  
  // Date actuelle utilisée pour l'affichage du mois ou du jour
  currentDate: Date = new Date();

  // Statistiques affichées sur le dashboard
  stats = {
    totalClients: 354,
    sessionsToday: 28,
    avgSessionTime: 52, // Durée moyenne (en minutes)
    successRate: 78 // Taux de réussite en pourcentage
  };

  // Liste des séances planifiées (exemple statique)
  sessions = [
    {
      name: 'Sarah Johnson',
      time: '10:00 AM - 11:00 AM',
      type: 'Cognitive Behavioral Therapy',
      therapist: 'Dr. Michael Rodriguez',
      status: 'upcoming'
    },
    {
      name: 'James Wilson',
      time: '11:30 AM - 12:30 PM',
      type: 'Anxiety Management',
      therapist: 'Dr. Amanda Chen',
      status: 'upcoming'
    },
    {
      name: 'Emily Davis',
      time: '2:00 PM - 3:00 PM',
      type: 'Depression Counseling',
      therapist: 'Dr. Robert Taylor',
      status: 'upcoming'
    }
  ];

  // Constructeur du composant
  constructor() {}

  // Initialisation du composant (appelé au chargement)
  ngOnInit(): void {
    // Ici, tu pourras appeler un service pour charger les vraies données
  }

  // Méthode pour changer d'onglet (à compléter selon l'interface HTML)
  changeTab(tab: string): void {
    // Exemple : this.currentTab = tab;
  }

  // Méthode pour naviguer entre les mois (utile pour un calendrier)
  changeMonth(direction: 'prev' | 'next'): void {
    const newDate = new Date(this.currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    this.currentDate = newDate;
  }
}
