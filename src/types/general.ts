// Data Types

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

// Components Props Types
export interface SelectorItemData {
  id: number;
  label: string;
  value: string;
}

export interface UserProfessionSelector extends SelectorItemData {
  value: Profession;
}
