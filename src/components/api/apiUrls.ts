import { RAWG_API_KEY } from '@/components/api/apiKeys';

export const ALL_GAMES = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`;

export const GAME_BY_ID = (id: number) =>
  `https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`;
