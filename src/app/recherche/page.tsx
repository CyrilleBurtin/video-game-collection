'use client';

import { searchGames } from '@/components/api/searchGames';
import GameCard from '@/features/customUI/GameCard';
import SearchBar from '@/features/search/SearchBar';
import { Game } from '@/interfaces/interfaces';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Search = () => {
  const searchParams = useSearchParams();
  const [gameList, setGameList] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const q = searchParams.get('q') || '';

  useEffect(() => {
    const fetchGames = async () => {
      if (!q) {
        setGameList([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const games = await searchGames(q);
        setGameList(games);
      } catch (err) {
        setError(`Une erreur est survenue lors de la recherche:${err}`);
        setGameList([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, [q]);

  return (
    <div>
      <SearchBar />
      {isLoading ? (
        <p>Chargement...</p>
      ) : error ? (
        <p>{error}</p>
      ) : gameList ? (
        <div>
          {gameList.length > 0 ? (
            <>
              <h2>
                {gameList.length} résultats pour : {q}
              </h2>
              <ul className="m-auto mt-16 grid w-4/5 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                {gameList.map((game) => (
                  <li key={game.id}>
                    <GameCard game={game} />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>Aucun jeu trouvé pour {q}.</p>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
