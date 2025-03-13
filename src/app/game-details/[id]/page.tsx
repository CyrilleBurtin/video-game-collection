'use server';

import { getGameDetails } from '@/components/api/getGameDetails';
import { Game } from '@/interfaces/interfaces';
import { unixToDate } from '@/lib/utils';
import React from 'react';

export default async function GameInfo({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = parseInt((await params).id, 10);
  const game: Game = await getGameDetails(slug);
  console.log(game);
  return (
    <div className="game-grid">
      <div>
        <p>{game.name}</p>
        <div>{game.summary}</div>
        {game?.platforms?.map(({ abbreviation }: { abbreviation: string }) => (
          <p key={abbreviation}>{abbreviation}</p>
        ))}
        <p>{unixToDate(game.first_release_date)}</p>
        {/*<Image
          src={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${game?.cover?.image_id}.webp`}
          alt={game.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />*/}
      </div>
    </div>
  );
}
