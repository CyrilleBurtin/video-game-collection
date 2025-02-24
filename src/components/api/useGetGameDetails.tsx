import { useQuery } from '@tanstack/react-query';

export interface Game {
  name: string;
  description: string;
  platforms: { platform: { name: string } }[];
  background_image: string;
}

export async function getGameDetails(id: number): Promise<Game> {
  const response = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`,
  );
  return await response.json();
}

const useGetGameDetails = (id: number) =>
  useQuery({
    queryKey: ['getGames'],
    queryFn: () => getGameDetails(id),
  });

export default useGetGameDetails;
