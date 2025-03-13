import GameList from '@/features/gameList/GameList';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <Suspense fallback={'loading...'}>
      <GameList />
    </Suspense>
  );
}
