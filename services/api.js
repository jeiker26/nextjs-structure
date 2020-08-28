import axios from 'axios';

export const API_URLS = {
  BASE: 'https://pokeapi.co/api/v2/',
  POKEMON: 'pokemon'
};

export const baseConfig = {
  baseURL: API_URLS.BASE,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
};

export const axiosInstance = axios.create(baseConfig);
