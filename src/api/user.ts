import {UsersRequestParams, UsersResponse} from 'types';
import {client} from './client';

export const getUsers = async ({
  filter,
  value,
}: UsersRequestParams): Promise<UsersResponse> => {
  return client
    .get<UsersResponse>(`/users?${filter}=${value}`, {})
    .then(response => response.data);
};
