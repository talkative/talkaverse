const axios = require('axios').default;

export const RESTClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
