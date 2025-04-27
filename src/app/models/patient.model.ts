import { Appointment } from "./apointment.model";

export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  medicalHistory?: string;
  appointments?: Appointment[];
  createdAt: Date;
  updatedAt: Date;
}
