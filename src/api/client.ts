import axios from 'axios';

const baseURL = 'https://646535f99c09d77a62e720b4.mockapi.io/api';

export const client = axios.create({
  baseURL,
});
