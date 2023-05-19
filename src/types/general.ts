import {Profession} from './api';

// Components Props Types
export interface SelectorItemData {
  id: number;
  label: string;
  value: string;
}

export interface UserProfessionSelector extends SelectorItemData {
  value: Profession;
}
