import { GAME_BY_ID } from '@/components/api/apiUrls';
import { Game } from '@/interfaces/interfaces';

export async function getGameDetails(id: number): Promise<Game> {
  try {
    const response = await fetch(GAME_BY_ID(id));

    return response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error('Network error: Unable to fetch game details');
    } else if (error instanceof SyntaxError) {
      throw new Error('Invalid response: Unable to parse game data');
    } else {
      throw error instanceof Error
        ? error
        : new Error('An unexpected error occurred while fetching game details');
    }
  }
}
