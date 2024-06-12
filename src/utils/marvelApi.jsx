import axios from 'axios';
import CryptoJS from 'crypto-js';

const {
  VITE_APP_MARVEL_API_BASE_URL,
  VITE_APP_MARVEL_API_PUBLIC_KEY,
  VITE_APP_MARVEL_API_PRIVATE_KEY,
} = import.meta.env;

const MARVEL_API_BASE_URL = VITE_APP_MARVEL_API_BASE_URL;
const MARVEL_API_PUBLIC_KEY = VITE_APP_MARVEL_API_PUBLIC_KEY;
const MARVEL_API_PRIVATE_KEY = VITE_APP_MARVEL_API_PRIVATE_KEY;

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

const marvelAPI = axios.create({
  baseURL: MARVEL_API_BASE_URL,
});

const handleAxiosResponse = (response) => {
  if (response?.data?.data?.results) {
    return response.data.data.results;
  } else {
    throw new Error('No data found.');
  }
};

const handleAxiosError = (error) => {
  if (error.response) {
    throw new Error('Request error: ' + error.response.status);
  } else if (error.request) {
    throw new Error('No response received from server.');
  } else {
    throw new Error('Failed to send request: ' + error.message);
  }
};

export const getMarvelCharacters = async (limit = 50) => {
  const authParams = generateHash();
  try {
    const response = await marvelAPI.get('/characters', {
      params: { ...authParams, limit },
    });
    return handleAxiosResponse(response);
  } catch (error) {
    handleAxiosError(error);
  }
};

export const getMarvelCharacterById = async (characterId) => {
  const authParams = generateHash();
  try {
    const response = await marvelAPI.get(`/characters/${characterId}`, {
      params: authParams,
    });
    return handleAxiosResponse(response)[0];
  } catch (error) {
    handleAxiosError(error);
  }
};

export const searchMarvelCharacters = async (query) => {
  const authParams = generateHash();
  try {
    const response = await marvelAPI.get('/characters', {
      params: {
        ...authParams,
        name: query,
      },
    });
    return handleAxiosResponse(response);
  } catch (error) {
    handleAxiosError(error);
  }
};

export const searchMarvelCharactersStartsWith = async (query) => {
  const authParams = generateHash();
  try {
    const response = await marvelAPI.get('/characters', {
      params: {
        ...authParams,
        nameStartsWith: query,
      },
    });
    return handleAxiosResponse(response);
  } catch (error) {
    handleAxiosError(error);
  }
};

export const getComicsByCharacterId = async (id) => {
  const authParams = generateHash();

  try {
    const response = await marvelAPI.get(`/characters/${id}/comics`, {
      params: {
        ...authParams,
      },
    });
    return handleAxiosResponse(response);
  } catch (error) {
    handleAxiosError(error);
  }
};

export default marvelAPI;
