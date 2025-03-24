'use server';

import { getGameDetails } from '@/components/api/getGameDetails';
import { Game } from '@/interfaces/interfaces';
import { unixToDate } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

export default async function GameInfo({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const game: Game = await getGameDetails(slug);
  console.log(game);

  return (
    <div className="m-auto mt-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 sm:flex-row">
        <Image
          src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game?.cover?.image_id}.webp`}
          alt={game.name}
          width={264}
          height={374}
          priority
          className="rounded-xl shadow-lg"
        />
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">{game.name}</h1>
          <p className="text-lg text-gray-700">{game.summary}</p>
          <div className="flex gap-4">
            {game?.platforms?.map(({ abbreviation }) => (
              <span
                key={abbreviation}
                className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800"
              >
                {abbreviation}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Sortie : {unixToDate(game.first_release_date)}
          </p>
          <button className="mt-4 rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
            Ajouter à la wishlist
          </button>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Captures d’écran</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {game?.screenshots?.map((screenshot) => (
            <div key={screenshot.image_id} className="group relative">
              <button>
                <Image
                  src={`https://images.igdb.com/igdb/image/upload/t_screenshot_big/${screenshot.image_id}.webp`}
                  alt={game.name}
                  width={889}
                  height={500}
                  className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Jeux similaires</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {game?.similar_games?.slice(0, 5).map((similar) => (
            <div key={similar.id} className="text-center">
              <Image
                src={`https://images.igdb.com/igdb/image/upload/t_cover_small/${similar.cover || 'default'}.webp`}
                alt={similar.name}
                width={90}
                height={120}
                className="mx-auto rounded-lg"
              />
              <p className="mt-2 text-sm">{similar.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
