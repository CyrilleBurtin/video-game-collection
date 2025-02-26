import { RAWG_API_KEY, RAWG_API_URL } from '@/components/api/apiKeys';

export const ALL_GAMES = `${RAWG_API_URL}games?key=${RAWG_API_KEY}`;

export const GAME_BY_ID = (id: number) =>
  `${RAWG_API_URL}games/${id}?key=${RAWG_API_KEY}`;
