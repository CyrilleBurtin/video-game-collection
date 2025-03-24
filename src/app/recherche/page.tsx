import { searchGames } from '@/components/api/searchGames';
import GameCard from '@/features/customUI/GameCard';
import SearchBar from '@/features/search/SearchBar';
import { Game } from '@/interfaces/interfaces';

type SearchPageProps = {
  searchParams:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | undefined;
};

export default async function Search({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const q = resolvedSearchParams.q || '';

  let gameList: Game[] = [];
  let error: string | null = null;

  if (q) {
    try {
      gameList = await searchGames(q as string);
    } catch (err) {
      error = `Une erreur est survenue lors de la recherche : ${err}`;
      gameList = [];
    }
  }

  return (
    <div>
      <SearchBar />
      {error ? (
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
}
