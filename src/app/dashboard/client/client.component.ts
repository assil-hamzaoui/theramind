import { Component, OnInit } from '@angular/core';

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  therapist: string;
  sessions: number;
  lastVisit: string;
  status: string;
  imageUrl: string;
}

@Component({
  selector: 'app-clients',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      phone: '(555) 123-4567',
      therapist: 'Dr. Michael Rodriguez',
      sessions: 12,
      lastVisit: '2025-04-28',
      status: 'Active',
      imageUrl: 'assets/images/user.png'
    },
    {
      id: 2,
      name: 'James Wilson',
      email: 'james.wilson@example.com',
      phone: '(555) 234-5678',
      therapist: 'Dr. Amanda Chen',
      sessions: 8,
      lastVisit: '2025-04-25',
      status: 'Active',
      imageUrl: 'assets/images/user.png'
    },
    {
      id: 3,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      phone: '(555) 345-6789',
      therapist: 'Dr. Robert Taylor',
      sessions: 15,
      lastVisit: '2025-04-30',
      status: 'Active',
      imageUrl: 'assets/images/user.png'
    },
    {
      id: 4,
      name: 'David Miller',
      email: 'david.miller@example.com',
      phone: '(555) 456-7890',
      therapist: 'Dr. Sarah Williams',
      sessions: 6,
      lastVisit: '2025-04-22',
      status: 'Active',
      imageUrl: 'assets/images/user.png'
    },
    {
      id: 5,
      name: 'Jessica Brown',
      email: 'jessica.brown@example.com',
      phone: '(555) 567-8901',
      therapist: 'Dr. Michael Rodriguez',
      sessions: 10,
      lastVisit: '2025-04-15',
      status: 'Inactive',
      imageUrl: 'assets/images/user.png'
    },
    {
      id: 6,
      name: 'Thomas Lee',
      email: 'thomas.lee@example.com',
      phone: '(555) 678-9012',
      therapist: 'Dr. Amanda Chen',
      sessions: 4,
      lastVisit: '2025-04-20',
      status: 'Active',
      imageUrl: 'assets/images/user.png'
    }
  ];

  filteredClients = [...this.clients];
  currentFilter = 'all';
  searchTerm = '';

  constructor() { }

  ngOnInit(): void {
  }

  filterClients(filter: string): void {
    this.currentFilter = filter;
    
    if (filter === 'all') {
      this.filteredClients = [...this.clients];
    } else {
      this.filteredClients = this.clients.filter(
        client => client.status.toLowerCase() === filter.toLowerCase()
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
      this.filterClients(this.currentFilter);
      return;
    }
    
    this.filteredClients = this.filteredClients.filter(client => 
      client.name.toLowerCase().includes(term) || 
      client.email.toLowerCase().includes(term) ||
      client.therapist.toLowerCase().includes(term)
    );
  }

  search(event: any): void {
    this.searchTerm = event.target.value;
    this.filterClients(this.currentFilter);
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'active':
        return 'status-active';
      case 'inactive':
        return 'status-inactive';
      default:
        return '';
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }
}

