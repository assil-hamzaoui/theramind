import { Component,OnInit } from '@angular/core';
interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  diagnosis: string;
  lastVisit: string;
  nextAppointment: string;
  status: string;
  progress: number;
  imageUrl: string;
  notes: string;
  therapyType: string;
  sessionsCompleted: number;
  totalSessions: number;
}

@Component({
  selector: 'app-mypatient',
  templateUrl: './mypatient.component.html',
  styleUrls: ['./mypatient.component.css']
})
export class MypatientComponent  implements OnInit {
  patients: Patient[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      age: 32,
      gender: 'Female',
      email: 'sarah.johnson@example.com',
      phone: '(555) 123-4567',
      diagnosis: 'Anxiety Disorder',
      lastVisit: '2025-04-28',
      nextAppointment: '2025-05-05',
      status: 'Active',
      progress: 65,
      imageUrl: 'assets/images/user.png',
      notes: 'Showing good progress with CBT techniques. Sleep patterns improving.',
      therapyType: 'Cognitive Behavioral Therapy',
      sessionsCompleted: 8,
      totalSessions: 12
    },
    {
      id: 2,
      name: 'James Wilson',
      age: 45,
      gender: 'Male',
      email: 'james.wilson@example.com',
      phone: '(555) 234-5678',
      diagnosis: 'Depression',
      lastVisit: '2025-04-25',
      nextAppointment: '2025-05-02',
      status: 'Active',
      progress: 40,
      imageUrl: 'assets/images/user.png',
      notes: 'Still struggling with motivation. Medication adjusted last session.',
      therapyType: 'Psychotherapy',
      sessionsCompleted: 5,
      totalSessions: 15
    },
    {
      id: 3,
      name: 'Emma Davis',
      age: 28,
      gender: 'Female',
      email: 'emma.davis@example.com',
      phone: '(555) 345-6789',
      diagnosis: 'PTSD',
      lastVisit: '2025-04-27',
      nextAppointment: '2025-05-04',
      status: 'Active',
      progress: 55,
      imageUrl: 'assets/images/user.png',
      notes: 'Responding well to EMDR therapy. Nightmares have decreased in frequency.',
      therapyType: 'EMDR',
      sessionsCompleted: 6,
      totalSessions: 10
    },
    {
      id: 4,
      name: 'David Martinez',
      age: 37,
      gender: 'Male',
      email: 'david.martinez@example.com',
      phone: '(555) 456-7890',
      diagnosis: 'Stress Management',
      lastVisit: '2025-04-20',
      nextAppointment: '2025-05-04',
      status: 'Active',
      progress: 75,
      imageUrl: 'assets/images/user.png',
      notes: 'Work-related stress improving. Practicing mindfulness techniques regularly.',
      therapyType: 'Mindfulness-Based Stress Reduction',
      sessionsCompleted: 9,
      totalSessions: 12
    },
    {
      id: 5,
      name: 'Olivia Brown',
      age: 41,
      gender: 'Female',
      email: 'olivia.brown@example.com',
      phone: '(555) 567-8901',
      diagnosis: 'Relationship Issues',
      lastVisit: '2025-04-26',
      nextAppointment: '2025-05-03',
      status: 'Active',
      progress: 60,
      imageUrl: 'assets/images/user.png',
      notes: 'Communication with partner improving. Still working on conflict resolution strategies.',
      therapyType: 'Couples Therapy',
      sessionsCompleted: 7,
      totalSessions: 10
    },
    {
      id: 6,
      name: 'William Taylor',
      age: 52,
      gender: 'Male',
      email: 'william.taylor@example.com',
      phone: '(555) 678-9012',
      diagnosis: 'Insomnia',
      lastVisit: '2025-04-22',
      nextAppointment: '2025-05-06',
      status: 'Active',
      progress: 50,
      imageUrl: 'assets/images/user.png',
      notes: 'Sleep hygiene improving. Still experiencing early morning awakening.',
      therapyType: 'Cognitive Behavioral Therapy for Insomnia',
      sessionsCompleted: 4,
      totalSessions: 8
    },
    {
      id: 7,
      name: 'Sophia Garcia',
      age: 25,
      gender: 'Female',
      email: 'sophia.garcia@example.com',
      phone: '(555) 789-0123',
      diagnosis: 'Social Anxiety',
      lastVisit: '2025-04-24',
      nextAppointment: '2025-05-01',
      status: 'Active',
      progress: 35,
      imageUrl: 'assets/images/user.png',
      notes: 'Beginning exposure therapy. Has completed first social interaction exercise.',
      therapyType: 'Exposure Therapy',
      sessionsCompleted: 3,
      totalSessions: 12
    },
    {
      id: 8,
      name: 'Michael Rodriguez',
      age: 33,
      gender: 'Male',
      email: 'michael.rodriguez@example.com',
      phone: '(555) 890-1234',
      diagnosis: 'Anger Management',
      lastVisit: '2025-04-23',
      nextAppointment: '2025-05-07',
      status: 'Active',
      progress: 45,
      imageUrl: 'assets/images/user.png',
      notes: 'Learning to identify anger triggers. Practicing deep breathing techniques.',
      therapyType: 'Cognitive Behavioral Therapy',
      sessionsCompleted: 5,
      totalSessions: 10
    }
  ];

  filteredPatients: Patient[] = [];
  searchTerm: string = '';
  statusFilter: string = 'all';
  sortBy: string = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';
  selectedPatient: Patient | null = null;
  viewMode: 'list' | 'grid' = 'list';
  currentDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let result = [...this.patients];

    // Apply search filter
    if (this.searchTerm.trim() !== '') {
      const search = this.searchTerm.toLowerCase().trim();
      result = result.filter(patient => 
        patient.name.toLowerCase().includes(search) ||
        patient.diagnosis.toLowerCase().includes(search) ||
        patient.email.toLowerCase().includes(search) ||
        patient.phone.includes(search)
      );
    }

    // Apply status filter
    if (this.statusFilter !== 'all') {
      result = result.filter(patient => patient.status.toLowerCase() === this.statusFilter.toLowerCase());
    }

    // Apply sorting
    result.sort((a, b) => {
      let valueA: any;
      let valueB: any;

      switch (this.sortBy) {
        case 'name':
          valueA = a.name;
          valueB = b.name;
          break;
        case 'lastVisit':
          valueA = new Date(a.lastVisit);
          valueB = new Date(b.lastVisit);
          break;
        case 'nextAppointment':
          valueA = new Date(a.nextAppointment);
          valueB = new Date(b.nextAppointment);
          break;
        case 'progress':
          valueA = a.progress;
          valueB = b.progress;
          break;
        default:
          valueA = a.name;
          valueB = b.name;
      }

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });

    this.filteredPatients = result;
  }

  search(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }

  filterByStatus(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  sortPatients(criteria: string): void {
    if (this.sortBy === criteria) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = criteria;
      this.sortDirection = 'asc';
    }
    this.applyFilters();
  }

  toggleViewMode(): void {
    this.viewMode = this.viewMode === 'list' ? 'grid' : 'list';
  }

  selectPatient(patient: Patient): void {
    this.selectedPatient = patient;
  }

  closePatientDetails(): void {
    this.selectedPatient = null;
  }

  getProgressColor(progress: number): string {
    if (progress < 30) return '#f44336'; // Red
    if (progress < 60) return '#ff9800'; // Orange
    return '#4caf50'; // Green
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  getDaysSinceLastVisit(lastVisit: string): number {
    const today = new Date();
    const lastVisitDate = new Date(lastVisit);
    const diffTime = Math.abs(today.getTime() - lastVisitDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  getDaysUntilNextAppointment(nextAppointment: string): number {
    const today = new Date();
    const nextAppointmentDate = new Date(nextAppointment);
    const diffTime = Math.abs(nextAppointmentDate.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  addNewPatient(): void {
    // This would open a form to add a new patient
    console.log('Add new patient');
  }

  editPatient(patient: Patient, event: Event): void {
    event.stopPropagation();
    // This would open a form to edit the patient
    console.log('Edit patient', patient.id);
  }

  scheduleAppointment(patient: Patient, event: Event): void {
    event.stopPropagation();
    // This would open a form to schedule an appointment
    console.log('Schedule appointment for patient', patient.id);
  }

  sendMessage(patient: Patient, event: Event): void {
    event.stopPropagation();
    // This would open a messaging interface
    console.log('Send message to patient', patient.id);
  }
}

