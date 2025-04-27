export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  imageUrl: string;
  availability?: TimeSlot[];
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface TimeSlot {
  id: number;
  startTime: Date;
  endTime: Date;
  isBooked: boolean;
}
