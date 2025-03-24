import { searchGames } from '@/components/api/searchGames';
import GameCard from '@/features/customUI/GameCard';
import SearchBar from '@/features/search/SearchBar';
import { Game } from '@/interfaces/interfaces';
import { Suspense } from 'react';

type SearchPageProps = {
  searchParams: Promise<{ [key: string]: string | undefined }> | undefined;
};

export default async function Search({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const searchQuery = resolvedSearchParams.q || '';

  return (
    <div className="min-h-screen bg-gray-800">
      <div className="m-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Rechercher un jeu
          </h1>
          <SearchBar />
        </header>
        {searchQuery && (
          <Suspense fallback={<p className="text-center">Chargement...</p>}>
            <SearchResults searchQuery={searchQuery} />
          </Suspense>
        )}
      </div>
    </div>
  );
}

async function SearchResults({ searchQuery }: { searchQuery: string }) {
  let gameList: Game[] = [];
  let error: string | null = null;

  try {
    gameList = await searchGames(searchQuery);
  } catch (err) {
    error = `Une erreur est survenue : ${err}`;
  }

  return (
    <section className="mt-12 bg-gray-800">
      {error ? (
        <p className="text-center text-red-500">
          {error} <br />
          <span className="text-sm">
            Vérifiez votre connexion et réessayez.
          </span>
        </p>
      ) : gameList.length > 0 ? (
        <>
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            {gameList.length} résultat{gameList.length > 1 ? 's' : ''} pour :
            &quot;
            {searchQuery}&quot;
          </h2>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6">
            {gameList.map((game) => (
              <li
                key={game.id}
                className="transition-transform hover:scale-105"
              >
                {game.id}
                <GameCard game={game} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="mt-8 text-center text-gray-500">
          Aucun jeu trouvé pour &quot;{searchQuery}&quot;. Essayez un autre
          terme !
        </p>
      )}
    </section>
  );
}
