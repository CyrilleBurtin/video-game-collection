import { RAWG_API_KEY, RAWG_API_URL } from '@/components/api/apiKeys';

const API_KEY_PARAM = `key=${RAWG_API_KEY}`;

export const ALL_GAMES = `${RAWG_API_URL}games?${API_KEY_PARAM}`;

export const GAME_BY_ID = (id: number) =>
  `${RAWG_API_URL}games/${id}?${API_KEY_PARAM}`;

export const searchGameByName = (name: string) =>
  `${RAWG_API_URL}games?search=${name}&${API_KEY_PARAM}`;
