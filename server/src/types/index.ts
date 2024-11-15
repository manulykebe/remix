export interface User {
  id: string;
  username: string;
  password: string; // Hashed
  isAdmin: boolean;
}

export type DateStatus = 'unavailable' | 'prefer-not' | 'request-holiday' | 'preferred';

export interface DateRequest {
  id: string;
  userId: string;
  date: string;
  status: DateStatus;
  acknowledged?: boolean;
  acknowledgedBy?: string;
  createdAt: string;
}

export interface CalendarData {
  users: User[];
  dateRequests: DateRequest[];
}