import { GAME_BY_ID } from '@/components/api/apiUrls';
import { Game } from '@/interfaces/interfaces';

export async function getGameDetails(id: number): Promise<Game> {
  try {
    const response = await fetch(GAME_BY_ID(id));

    return response.json();
  } catch (error) {
    throw new Error(`An unexpected error occurred while fetching : ${error}`);
  }
}
