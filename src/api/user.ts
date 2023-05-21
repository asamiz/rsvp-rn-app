import {UserData, UsersRequestParams, UsersResponse} from 'types';
import {client} from './client';

export const getUsers = async ({
  filter,
  value,
}: UsersRequestParams): Promise<UsersResponse> => {
  return client
    .get<UsersResponse>(`/users?${filter}=${value}`, {})
    .then(response => response.data);
};

export const submitUserData = async (
  data: UserData,
): Promise<UsersResponse> => {
  console.log('DATA', data);
  return client.post('/users', {
    ...data,
  });
};
