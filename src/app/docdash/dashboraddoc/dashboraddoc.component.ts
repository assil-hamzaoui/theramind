import { Component,OnInit } from '@angular/core';

interface Session {
  id: number;
  patientName: string;
  patientImageUrl: string;
  time: string;
  duration: number;
  type: string;
  status: string;
}

interface Patient {
  id: number;
  name: string;
  imageUrl: string;
}

interface Day {
  name: string;
  date: string;
  isToday: boolean;
  sessions: Session[];
}

interface Activity {
  id: number;
  patientName: string;
  type: string;
  description: string;
  time: string;
}

interface Note {
  id: number;
  patientName: string;
  patientImageUrl: string;
  date: string;
  content: string;
}

@Component({
  selector: 'app-dashboraddoc',
  templateUrl: './dashboraddoc.component.html',
  styleUrls: ['./dashboraddoc.component.css']
})
export class DashboraddocComponent  implements OnInit {
  currentDate: Date = new Date();
  todaySessions: number = 5;
  totalPatients: number = 42;
  pendingReports: number = 7;
  unreadMessages: number = 5;

  upcomingSessions: Session[] = [
    {
      id: 1,
      patientName: 'Sarah Johnson',
      patientImageUrl: 'assets/images/user.png',
      time: '10:00 AM',
      duration: 60,
      type: 'Cognitive Behavioral Therapy',
      status: 'upcoming'
    },
    {
      id: 2,
      patientName: 'James Wilson',
      patientImageUrl: 'assets/images/user.png',
      time: '11:30 AM',
      duration: 45,
      type: 'Anxiety Management',
      status: 'upcoming'
    },
    {
      id: 3,
      patientName: 'Emma Davis',
      patientImageUrl: 'assets/images/user.png',
      time: '2:00 PM',
      duration: 60,
      type: 'Depression Therapy',
      status: 'upcoming'
    },
    {
      id: 4,
      patientName: 'David Martinez',
      patientImageUrl: 'assets/images/user.png',
      time: '3:30 PM',
      duration: 45,
      type: 'Stress Management',
      status: 'upcoming'
    },
    {
      id: 5,
      patientName: 'Olivia Brown',
      patientImageUrl: 'assets/images/user.png',
      time: '5:00 PM',
      duration: 60,
      type: 'Relationship Counseling',
      status: 'upcoming'
    }
  ];

  patientActivities: Activity[] = [
    {
      id: 1,
      patientName: 'Sarah Johnson',
      type: 'completed',
      description: 'completed the weekly mood assessment',
      time: '2 hours ago'
    },
    {
      id: 2,
      patientName: 'James Wilson',
      type: 'missed',
      description: 'missed the scheduled appointment',
      time: '1 day ago'
    },
    {
      id: 3,
      patientName: 'Emma Davis',
      type: 'message',
      description: 'sent you a new message',
      time: '3 hours ago'
    },
    {
      id: 4,
      patientName: 'David Martinez',
      type: 'progress',
      description: 'reported improved sleep patterns',
      time: '5 hours ago'
    },
    {
      id: 5,
      patientName: 'Olivia Brown',
      type: 'homework',
      description: 'submitted the weekly journal entry',
      time: '1 day ago'
    }
  ];

  weekDays: Day[] = [
    {
      name: 'Mon',
      date: 'May 1',
      isToday: true,
      sessions: [
        {
          id: 1,
          patientName: 'Sarah Johnson',
          patientImageUrl: 'assets/images/user.png',
          time: '10:00 AM',
          duration: 60,
          type: 'CBT',
          status: 'upcoming'
        },
        {
          id: 2,
          patientName: 'James Wilson',
          patientImageUrl: 'assets/images/user.png',
          time: '11:30 AM',
          duration: 45,
          type: 'Anxiety',
          status: 'upcoming'
        }
      ]
    },
    {
      name: 'Tue',
      date: 'May 2',
      isToday: false,
      sessions: [
        {
          id: 3,
          patientName: 'Emma Davis',
          patientImageUrl: 'assets/images/user.png',
          time: '2:00 PM',
          duration: 60,
          type: 'Depression',
          status: 'upcoming'
        }
      ]
    },
    {
      name: 'Wed',
      date: 'May 3',
      isToday: false,
      sessions: [
        {
          id: 4,
          patientName: 'David Martinez',
          patientImageUrl: 'assets/images/user.png',
          time: '3:30 PM',
          duration: 45,
          type: 'Stress',
          status: 'upcoming'
        },
        {
          id: 5,
          patientName: 'Olivia Brown',
          patientImageUrl: 'assets/images/user.png',
          time: '5:00 PM',
          duration: 60,
          type: 'Relationship',
          status: 'upcoming'
        }
      ]
    },
    {
      name: 'Thu',
      date: 'May 4',
      isToday: false,
      sessions: [
        {
          id: 6,
          patientName: 'William Taylor',
          patientImageUrl: 'assets/images/user.png',
          time: '10:00 AM',
          duration: 60,
          type: 'CBT',
          status: 'upcoming'
        }
      ]
    },
    {
      name: 'Fri',
      date: 'May 5',
      isToday: false,
      sessions: [
        {
          id: 7,
          patientName: 'Sophia Garcia',
          patientImageUrl: 'assets/images/user.png',
          time: '2:00 PM',
          duration: 60,
          type: 'Anxiety',
          status: 'upcoming'
        }
      ]
    },
    {
      name: 'Sat',
      date: 'May 6',
      isToday: false,
      sessions: []
    },
    {
      name: 'Sun',
      date: 'May 7',
      isToday: false,
      sessions: []
    }
  ];

  patients: Patient[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      imageUrl: 'assets/images/user.png'
    },
    {
      id: 2,
      name: 'James Wilson',
      imageUrl: 'assets/images/user.png'
    },
    {
      id: 3,
      name: 'Emma Davis',
      imageUrl: 'assets/images/user.png'
    },
    {
      id: 4,
      name: 'David Martinez',
      imageUrl: 'assets/images/user.png'
    },
    {
      id: 5,
      name: 'Olivia Brown',
      imageUrl: 'assets/images/user.png'
    }
  ];

  recentNotes: Note[] = [
    {
      id: 1,
      patientName: 'Sarah Johnson',
      patientImageUrl: 'assets/images/user.png',
      date: 'April 30, 2025',
      content: 'Patient reported significant improvement in anxiety symptoms. Sleep quality has improved. Continuing with CBT exercises.'
    },
    {
      id: 2,
      patientName: 'James Wilson',
      patientImageUrl: 'assets/images/user.png',
      date: 'April 29, 2025',
      content: 'Patient missed appointment. Follow up required to reschedule and check on progress with medication.'
    },
    {
      id: 3,
      patientName: 'Emma Davis',
      patientImageUrl: 'assets/images/user.png',
      date: 'April 28, 2025',
      content: 'Depression symptoms showing moderate improvement. Patient is engaging well with therapy and completing homework assignments.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  isSessionStartable(session: Session): boolean {
    const sessionTime = this.parseTime(session.time);
    const currentTime = new Date();
    const timeDiff = (sessionTime.getTime() - currentTime.getTime()) / (1000 * 60); // difference in minutes
    
    // Session is startable if it's within 15 minutes of the scheduled time
    return timeDiff >= -15 && timeDiff <= 15;
  }

  getActivityIcon(type: string): string {
    switch (type) {
      case 'completed': return 'fas fa-check-circle';
      case 'missed': return 'fas fa-times-circle';
      case 'message': return 'far fa-envelope';
      case 'progress': return 'fas fa-chart-line';
      case 'homework': return 'fas fa-book';
      default: return 'fas fa-info-circle';
    }
  }

  getSessionPosition(time: string): number {
    const hours = parseInt(time.split(':')[0]);
    const minutes = parseInt(time.split(':')[1]);
    
    // Calculate position based on time (8:00 AM = 0px, 6:00 PM = 600px)
    const startHour = 8; // 8:00 AM
    const hourHeight = 60; // 60px per hour
    
    return (hours - startHour) * hourHeight + (minutes / 60) * hourHeight;
  }

  getSessionHeight(duration: number): number {
    // Calculate height based on duration (60 min = 60px)
    return duration;
  }

  private parseTime(timeString: string): Date {
    const time = new Date();
    const [hours, minutesPart] = timeString.split(':');
    const [minutes, period] = minutesPart.split(' ');
    
    let hour = parseInt(hours);
    if (period === 'PM' && hour < 12) {
      hour += 12;
    } else if (period === 'AM' && hour === 12) {
      hour = 0;
    }
    
    time.setHours(hour, parseInt(minutes), 0, 0);
    return time;
  }
}

