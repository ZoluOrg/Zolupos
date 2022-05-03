export interface IEmployee { 
  id: number;
  FirstName: string;
  LastName: string;
  LastLogin: Date | null;
  PinHashed: string;
  Role: string;
  profileURL: string;
}