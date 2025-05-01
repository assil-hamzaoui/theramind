import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-thera',
  templateUrl: './thera.component.html',
  styleUrls: ['./thera.component.css']
})
export class TheraComponent implements OnInit {
  therapists = [
    {
      id: 1,
      name: 'Dr. Michael Rodriguez',
      specialty: 'Cognitive Behavioral Therapy',
      patients: 42,
      rating: 4.8,
      experience: '12 years',
      status: 'Active',
      imageUrl: 'assets/images/therapists/therapist-1.jpg'
    },
    {
      id: 2,
      name: 'Dr. Amanda Chen',
      specialty: 'Anxiety Management',
      patients: 38,
      rating: 4.9,
      experience: '10 years',
      status: 'Active',
      imageUrl: 'assets/images/therapists/therapist-2.jpg'
    },
    {
      id: 3,
      name: 'Dr. Robert Taylor',
      specialty: 'Depression Counseling',
      patients: 35,
      rating: 4.7,
      experience: '8 years',
      status: 'Active',
      imageUrl: 'assets/images/therapists/therapist-3.jpg'
    },
    {
      id: 4,
      name: 'Dr. Sarah Williams',
      specialty: 'Stress Management',
      patients: 29,
      rating: 4.6,
      experience: '7 years',
      status: 'Active',
      imageUrl: 'assets/images/therapists/therapist-4.jpg'
    },
    {
      id: 5,
      name: 'Dr. David Johnson',
      specialty: 'Family Therapy',
      patients: 31,
      rating: 4.5,
      experience: '9 years',
      status: 'On Leave',
      imageUrl: 'assets/images/therapists/therapist-5.jpg'
    },
    {
      id: 6,
      name: 'Dr. Emily Parker',
      specialty: 'Child Psychology',
      patients: 25,
      rating: 4.8,
      experience: '6 years',
      status: 'Active',
      imageUrl: 'assets/images/therapists/therapist-6.jpg'
    }
  ];

  filteredTherapists = [...this.therapists];
  currentFilter = 'all';
  searchTerm = '';

  constructor() { }

  ngOnInit(): void {
  }

  filterTherapists(filter: string): void {
    this.currentFilter = filter;
    
    if (filter === 'all') {
      this.filteredTherapists = [...this.therapists];
    } else {
      this.filteredTherapists = this.therapists.filter(
        therapist => therapist.status.toLowerCase() === filter.toLowerCase()
      );
    }

    // Apply search if there's a search term
    if (this.searchTerm) {
      this.applySearch();
    }
  }

  applySearch(): void {
    const term = this.searchTerm.toLowerCase();
    
    if (!term) {
      this.filterTherapists(this.currentFilter);
      return;
    }
    
    this.filteredTherapists = this.filteredTherapists.filter(therapist => 
      therapist.name.toLowerCase().includes(term) || 
      therapist.specialty.toLowerCase().includes(term)
    );
  }

  search(event: any): void {
    this.searchTerm = event.target.value;
    this.filterTherapists(this.currentFilter);
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'active':
        return 'status-active';
      case 'on leave':
        return 'status-on-leave';
      case 'inactive':
        return 'status-inactive';
      default:
        return '';
    }
  }
}


