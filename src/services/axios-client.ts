import axios from 'axios';

const baseURL = import.meta.env.VITE_REST_API_URL;

const defaultOptions = {
  baseURL,
};

export const instance = axios.create(defaultOptions);
