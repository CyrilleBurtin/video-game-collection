import { ALL_GAMES } from '@/components/api/apiUrls';

export const getAllGames = async () => {
  const response = await fetch(ALL_GAMES);

  return response.json();
};
