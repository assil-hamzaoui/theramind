import { Component } from '@angular/core';

interface Doctor {
  name: string;
  title: string;
  phone: string;
  rating: string;
  email: string;
  isFollowing: boolean;
}

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  doctors: Doctor[] = [
    {
      name: 'Dr. Ahmed Ben Salah',
      title: 'Psychologue',
      phone: '+216 20 123 456',
      rating: '★★★★★',
      email: 'Dr.ahmed@gmail.com',
      isFollowing: false
    },
    {
      name: 'Dr. Fatma Boukadida',
      title: 'Psychologue',
      phone: '+216 50 987 654',
      rating: '★★★★☆',
      email: 'Dr.fatma@gmail.com',
      isFollowing: false
    },
    {
      name: 'Dr. Mohamed Trabelsi',
      title: 'Psychologue',
      phone: '+216 98 765 432',
      rating: '★★★☆☆',
      email: 'Dr.mohamed@gmail.com',
      isFollowing: false
    },
    {
      name: 'Dr. Amira Chaabane',
      title: 'Psychologue',
      phone: '+216 22 345 678',
      rating: '★★★★☆',
      email: 'Dr.amira@gmail.com',
      isFollowing: false
    },
    {
      name: 'Dr. Sami Hammami',
      title: 'Psychologue',
      phone: '+216 55 123 789',
      rating: '★★☆☆☆',
      email: 'Dr.sami@gmail.com',
      isFollowing: false
    },
    {
      name: 'Dr. Leila Abid',
      title: 'Psychologue',
      phone: '+216 29 456 123',
      rating: '★★★★★',
      email: 'Dr.leila@gmail.com',
      isFollowing: false
    }
  ];

  toggleFollow(doctor: Doctor) {
    doctor.isFollowing = !doctor.isFollowing;
  }
}
