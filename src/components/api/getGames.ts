import { ALL_GAMES } from '@/components/api/apiUrls';

export const getAllGames = async () => {
  try {
    const response = await fetch(ALL_GAMES);

    return response.json();
  } catch (error) {
    throw new Error(`An unexpected error occurred while fetching : ${error}`);
  }
};
