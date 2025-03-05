import GameList from '@/features/gameList/GameList';
import GameSearch from '@/features/gameSearch/GameSearch';

export default async function Home() {
  return (
    <>
      <GameSearch />
      <GameList />
    </>
  );
}
