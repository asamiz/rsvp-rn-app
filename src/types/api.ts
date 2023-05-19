export type Profession = 'Student' | 'Employed';

export type UserData = {
  id: string;
  name: string;
  age: number;
  dateOfBirth: Date;
  address: string;
  profession: Profession;
  locality: string;
  numberOfGuests: number;
};
