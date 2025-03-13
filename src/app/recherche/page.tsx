'use client';

import { searchGames } from '@/components/api/searchGames';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import GameCard from '@/features/customUI/GameCard';
import { Game } from '@/interfaces/interfaces';
import { FormEvent, useState } from 'react';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState<Game[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue.trim() && !isSearching) {
      setIsSearching(true);
      try {
        const games = await searchGames(searchValue);
        console.log(games);
        setResults(games);
      } catch (error) {
        console.error('Erreur lors de la recherche:', error);
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="game-search" className="sr-only">
          Rechercher un jeu vidéo
        </label>
        <Input
          type="text"
          id="game-search"
          placeholder="Chercher un jeu vidéo"
          value={searchValue}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
          disabled={isSearching}
        />
        <Button type="submit" disabled={isSearching}>
          {isSearching ? 'Recherche...' : 'Rechercher'}
        </Button>
      </form>
      {results && (
        <div>
          <h2>
            {results.length} résultats pour : {searchValue}
          </h2>
          {results.length > 0 ? (
            <ul className="m-auto mt-16 grid w-4/5 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
              {results.map((game) => (
                <li key={game.id}>
                  <GameCard game={game} />
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun jeu trouvé pour {searchValue}.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
