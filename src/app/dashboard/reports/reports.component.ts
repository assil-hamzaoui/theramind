import { Component ,OnInit} from '@angular/core';
interface SessionData {
  label: string;
  value: number;
}

interface TopTherapist {
  name: string;
  imageUrl: string;
  sessions: number;
  revenue: number;
  satisfaction: number;
  retention: number;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  // Session data for the bar chart
  sessionsData: SessionData[] = [
    { label: 'Mon', value: 12 },
    { label: 'Tue', value: 19 },
    { label: 'Wed', value: 15 },
    { label: 'Thu', value: 22 },
    { label: 'Fri', value: 18 },
    { label: 'Sat', value: 10 },
    { label: 'Sun', value: 8 }
  ];

  // Top performing therapists data
  topTherapists: TopTherapist[] = [
    {
      name: 'Dr. Michael Rodriguez',
      imageUrl: 'assets/images/therapists/therapist-1.jpg',
      sessions: 45,
      revenue: 5400,
      satisfaction: 4.9,
      retention: 94
    },
    {
      name: 'Dr. Emily Chen',
      imageUrl: 'assets/images/therapists/therapist-2.jpg',
      sessions: 38,
      revenue: 4560,
      satisfaction: 4.8,
      retention: 92
    },
    {
      name: 'Dr. Sarah Thompson',
      imageUrl: 'assets/images/therapists/therapist-3.jpg',
      sessions: 42,
      revenue: 5040,
      satisfaction: 4.7,
      retention: 90
    },
    {
      name: 'Dr. James Wilson',
      imageUrl: 'assets/images/therapists/therapist-4.jpg',
      sessions: 36,
      revenue: 4320,
      satisfaction: 4.6,
      retention: 88
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Methods for summary cards
  getTotalClients(): number {
    return 128;
  }

  getTotalTherapists(): number {
    return 24;
  }

  getCompletedSessions(): number {
    return 356;
  }

  getTotalRevenue(): string {
    return '42,850';
  }

  // Methods for charts
  getMaxSessionValue(): number {
    return Math.max(...this.sessionsData.map(item => item.value));
  }

  // Methods for star ratings
  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }
}


