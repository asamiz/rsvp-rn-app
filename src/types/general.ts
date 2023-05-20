// Data Types

export type Profession = 'Student' | 'Employed';

export type UserData = {
  id: string;
  name: string;
  age: string;
  dateOfBirth: Date;
  address: string;
  profession: Profession;
  locality: string;
  numberOfGuests: string;
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
