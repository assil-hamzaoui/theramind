import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  imageUrl: string;
}

@Component({
  selector: 'app-doctor',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorComponent {
  doctors: Doctor[] = [
    {
      id: 1,
      name: 'Walter White',
      specialty: 'Clinical Psychologist',
      imageUrl: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      specialty: 'Family Therapist',
      imageUrl: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg'
    },
    {
      id: 3,
      name: 'Emily Anderson',
      specialty: 'Cognitive Behavioral Therapist',
      imageUrl: 'https://images.pexels.com/photos/5998451/pexels-photo-5998451.jpeg'
    },
    {
      id: 4,
      name: 'Thomas Miller',
      specialty: 'Marriage Counselor',
      imageUrl: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg'
    },
    {
      id: 5,
      name: 'Sophie Chen',
      specialty: 'Child Psychologist',
      imageUrl: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg'
    }
  ];

  constructor(private router: Router) {}

  bookAppointment(doctorId: number) {
    this.router.navigate(['/rdvs'], { queryParams: { doctorId: doctorId } });
  }

  contactDoctor(doctorId: number): void {
    this.router.navigate(['/messages'], { queryParams: { doctorId: doctorId } });
  }

  handleBookAppointment() {
    this.router.navigate(['/rdvs']);
  }
}

