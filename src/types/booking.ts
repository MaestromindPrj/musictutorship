export interface Booking {
  id: string;
  fullName: string;
  emailAddress: string;
  selectedProgram: string;
  selectedDay: number;
  selectedMonth: number;
  selectedYear: number;
  selectedSlot: string;
  experience: string | null;
  createdAt: Date | string;
}
