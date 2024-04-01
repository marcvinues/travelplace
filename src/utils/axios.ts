import axios from 'axios';

const API_URL = 'data.json';
// change for the correct api https://api-us.exoticca.com/api/landing/v2/country/botswana

export const axiosRetriveData = axios.create({
  baseURL: API_URL,
});
