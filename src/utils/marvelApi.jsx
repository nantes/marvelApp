import axios from 'axios';
import CryptoJS from 'crypto-js';

// Marvel API keys
const {
  VITE_APP_MARVEL_API_BASE_URL,
  VITE_APP_MARVEL_API_PUBLIC_KEY,
  VITE_APP_MARVEL_API_PRIVATE_KEY,
} = import.meta.env;
const MARVEL_API_BASE_URL = VITE_APP_MARVEL_API_BASE_URL;
const MARVEL_API_PUBLIC_KEY = VITE_APP_MARVEL_API_PUBLIC_KEY;
const MARVEL_API_PRIVATE_KEY = VITE_APP_MARVEL_API_PRIVATE_KEY;

// Function to generate the necessary hash for authentication
const generateHash = () => {
  const timestamp = new Date().getTime();
  const hash = CryptoJS.MD5(
    timestamp + MARVEL_API_PRIVATE_KEY + MARVEL_API_PUBLIC_KEY,
  ).toString();
  return {
    ts: timestamp,
    apikey: MARVEL_API_PUBLIC_KEY,
    hash: hash,
  };
};

// Create an axios instance with base configuration
const marvelAPI = axios.create({
  baseURL: MARVEL_API_BASE_URL,
});

// Intercept request errors
marvelAPI.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('Error in Marvel API request:', error);
    return Promise.reject(error);
  },
);

// Get Marvel characters
export const getMarvelCharacters = async () => {
  const authParams = generateHash();
  try {
    const response = await marvelAPI.get('/characters', { params: authParams });
    return response.results;
  } catch (error) {
    throw new Error('Failed to fetch Marvel characters.');
  }
};

// Get details of a Marvel character by ID
export const getMarvelCharacterById = async (characterId) => {
  const authParams = generateHash();
  try {
    const response = await marvelAPI.get(`/characters/${characterId}`, {
      params: authParams,
    });
    return response.results[0];
  } catch (error) {
    throw new Error('Failed to fetch Marvel character details.');
  }
};

// Search Marvel characters by name
export const searchMarvelCharacters = async (query) => {
  const authParams = generateHash();
  try {
    const response = await marvelAPI.get('/characters', {
      params: {
        ...authParams,
        name: query,
      },
    });
    return response.results;
  } catch (error) {
    throw new Error('Failed to search Marvel characters.');
  }
};

// Search Marvel characters by name (starts with query)
export const searchMarvelCharactersStartsWith = async (query) => {
  const authParams = generateHash();
  try {
    const response = await marvelAPI.get('/characters', {
      params: {
        ...authParams,
        nameStartsWith: query,
      },
    });
    return response.results;
  } catch (error) {
    throw new Error('Failed to search Marvel characters.');
  }
};

export default marvelAPI;
