'use client';

import useSearchGame from '@/components/api/useSearchGame';
import { Input } from '@/components/ui/input';
import GameCard from '@/features/customUI/GameCard';
import { Game } from '@/interfaces/interfaces';
import { FormEvent, useState } from 'react';

export function GameSearch() {
  const [searchValue, setSearchValue] = useState('');
  const { data, isLoading, error } = useSearchGame(searchValue);
  const games: Game[] = data?.results || [];

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <form>
          <label htmlFor="game-search" className="sr-only">
            Rechercher un jeu vidéo
          </label>
          <Input
            type="text"
            id="game-search"
            placeholder="chercher un jeux vidéo"
            value={searchValue}
            onChange={handleChange}
          />
        </form>

        {isLoading ? <p>Loading...</p> : null}
        {error ? <p>Error: {(error as Error).message}</p> : null}
      </div>
      {games.length > 0 ? (
        <ul className="m-auto mt-16 grid w-4/5 grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">
          {games?.map((game: Game) => <GameCard game={game} key={game.id} />)}
        </ul>
      ) : null}
    </>
  );
}

export default GameSearch;
