'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchValue.trim()) return;

    setIsSearching(true);
    router.push(`/recherche?q=${encodeURIComponent(searchValue)}`);
    setIsSearching(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <label htmlFor="game-search" className="sr-only">
        Rechercher un jeu vidéo
      </label>
      <Input
        type="text"
        id="game-search"
        placeholder="Chercher un jeu vidéo"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        disabled={isSearching}
        className="w-full max-w-md"
      />
      <Button type="submit" disabled={isSearching || !searchValue.trim()}>
        {isSearching ? 'Recherche...' : 'Rechercher'}
      </Button>
    </form>
  );
};

export default SearchBar;
