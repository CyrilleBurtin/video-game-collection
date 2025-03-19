'use server';

import { getGameDetails } from '@/components/api/getGameDetails';
import { Game } from '@/interfaces/interfaces';
import { unixToDate } from '@/lib/utils';
import Image from 'next/image';
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
    <div className="m-auto mt-8 w-9/10">
      <div className="flex gap-8">
        <Image
          src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game?.cover?.image_id}.webp`}
          alt={game.name}
          width={264}
          height={374}
          priority
          className="rounded-xl"
        />
        <div className="flex flex-col gap-4">
          <p>{game.name}</p>
          <p>{game.summary}</p>
          {game?.platforms?.map(
            ({ abbreviation }: { abbreviation: string }) => (
              <p key={abbreviation}>{abbreviation}</p>
            ),
          )}
          <p>{unixToDate(game.first_release_date)}</p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-5 gap-4">
        {game?.screenshots?.map((screenshot) => (
          <Image
            src={`https://images.igdb.com/igdb/image/upload/t_screenshot_big/${screenshot.image_id}.webp`}
            alt={game.name}
            width={889}
            height={500}
            priority
            className="rounded-xl"
            key={screenshot.image_id}
          />
        ))}
      </div>
    </div>
  );
}
