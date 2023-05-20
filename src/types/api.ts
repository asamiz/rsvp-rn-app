import {UserData} from './general';

export type UsersResponse = {
  items: UserData[];
  count: number;
};

export type UsersRequestParams = {
  filter: string;
  value: string;
};
