import getMultipleGamesById from '@/components/api/getMultipleGamesById';
import { getStores } from '@/components/api/getStores';
import GameCard from '@/features/customUI/GameCard';

export default async function Store({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { results } = await getStores();

  const [store] = await results.filter((store) => store.slug === slug);
  const gameIds: number[] = store.games.map((curr: { id: number }) => curr.id);

  const games = await getMultipleGamesById(gameIds);

  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </div>
  );
}
