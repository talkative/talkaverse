import axios from 'axios';

export const RESTClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  auth: {
    username: process.env.NEXT_PUBLIC_HTTP_BASIC_USER ?? '',
    password: process.env.NEXT_PUBLIC_HTTP_BASIC_PASS ?? '',
  },
});
