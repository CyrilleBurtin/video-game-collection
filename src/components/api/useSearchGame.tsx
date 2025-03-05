import { searchGameByName } from '@/components/api/apiUrls';
import { GameSearchResponse } from '@/interfaces/interfaces';
import { useQuery } from '@tanstack/react-query';

export const searchGame = async (name: string): Promise<GameSearchResponse> => {
  try {
    const response = await fetch(searchGameByName(name));

    return await response.json();
  } catch (error) {
    console.error('Error fetching game data:', error);
    throw error;
  }
};

const useSearchGame = (searchTerm: string) => {
  return useQuery({
    queryKey: ['searchGame', searchTerm],
    queryFn: () => searchGame(searchTerm),
    enabled: !!searchTerm && searchTerm.length >= 2,
    staleTime: 5 * 60 * 1000,
  });
};

export default useSearchGame;
