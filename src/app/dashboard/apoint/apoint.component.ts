import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apoint',
  templateUrl: './apoint.component.html',
  styleUrls: ['./apoint.component.css']
})
export class ApointComponent implements OnInit {
  appointments = [
    {
      id: 1,
      patientName: 'Sarah Johnson',
      therapistName: 'Dr. Michael Rodriguez',
      date: '2025-05-05',
      time: '10:00 AM - 11:00 AM',
      type: 'Cognitive Behavioral Therapy',
      status: 'Upcoming'
    },
    {
      id: 2,
      patientName: 'James Wilson',
      therapistName: 'Dr. Amanda Chen',
      date: '2025-05-05',
      time: '11:30 AM - 12:30 PM',
      type: 'Anxiety Management',
      status: 'Upcoming'
    },
    {
      id: 3,
      patientName: 'Emily Davis',
      therapistName: 'Dr. Robert Taylor',
      date: '2025-05-05',
      time: '2:00 PM - 3:00 PM',
      type: 'Depression Counseling',
      status: 'Upcoming'
    },
    {
      id: 4,
      patientName: 'David Miller',
      therapistName: 'Dr. Sarah Williams',
      date: '2025-05-05',
      time: '4:30 PM - 5:30 PM',
      type: 'Stress Management',
      status: 'Upcoming'
    },
    {
      id: 5,
      patientName: 'Jessica Brown',
      therapistName: 'Dr. Michael Rodriguez',
      date: '2025-05-06',
      time: '9:00 AM - 10:00 AM',
      type: 'Cognitive Behavioral Therapy',
      status: 'Upcoming'
    },
    {
      id: 6,
      patientName: 'Thomas Lee',
      therapistName: 'Dr. Amanda Chen',
      date: '2025-05-06',
      time: '1:00 PM - 2:00 PM',
      type: 'Family Therapy',
      status: 'Upcoming'
    }
  ];

  filteredAppointments = [...this.appointments];
  currentFilter = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  filterAppointments(filter: string): void {
    this.currentFilter = filter;
    
    if (filter === 'all') {
      this.filteredAppointments = [...this.appointments];
    } else {
      this.filteredAppointments = this.appointments.filter(
        appointment => appointment.status.toLowerCase() === filter.toLowerCase()
      );
    }
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'upcoming':
        return 'status-upcoming';
      case 'completed':
        return 'status-completed';
      case 'cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  }
}



