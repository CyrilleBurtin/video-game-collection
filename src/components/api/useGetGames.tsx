import { useQuery } from '@tanstack/react-query';

export const getAllGames = async () => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`,
  );
  const data = await response.json();
  console.log('toto ::', data);
  return data;
};

const useGetAllGames = () =>
  useQuery({
    queryKey: ['getGames'],
    queryFn: getAllGames,
  });

export default useGetAllGames;
