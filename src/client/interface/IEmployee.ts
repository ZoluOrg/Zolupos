export interface IEmployee { 
  id: number;
  firstName: string;
  lastName: string;
  lastLogin: Date | null;
  pinHashed: string;
  role: string;
  profileURL: string;
}