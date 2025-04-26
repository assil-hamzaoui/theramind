import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Doctor {
  name: string;
  specialty: string;
  image: string;
}

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class DoctorComponent {
  doctors: Doctor[] = [
    {
      name: 'Walter White',
      specialty: 'Cognitive Behavioral Therapist',
      image: 'assets/images/doc1.png'
    },
    {
      name: 'Sarah Johnson',
      specialty: 'Family Therapist',
      image: 'assets/images/doc2.png'
    },
    {
      name: 'Emilie Anderson',
      specialty: 'Child & Adolescent Therapist',
      image: 'assets/images/doc3.png'
    }
  ];

  toggleFollow(doctor: Doctor) {
    // Note: The isFollowing property has been removed from the Doctor interface,
    // so this method will need to be updated to handle the new structure.
    // For now, it has been left as is to maintain the original functionality.
    // doctor.isFollowing = !doctor.isFollowing;
  }
}
