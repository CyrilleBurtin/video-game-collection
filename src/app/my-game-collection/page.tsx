'use server';

import getMultipleGamesById from '@/components/api/useGetMultipleGamesById';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

export default async function GameInfo() {
  const myGames = await getMultipleGamesById();

  const game_desc = (desc: string) => {
    if (desc) {
      return { __html: desc.split('Español')[0] };
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {myGames.map((game) => (
        <Card key={game.name}>
          <CardHeader>
            <CardTitle>{game.name}</CardTitle>
            <CardDescription>
              <div dangerouslySetInnerHTML={game_desc(game.description)} />
            </CardDescription>
          </CardHeader>
          <CardContent>
            {game.platforms?.map(
              ({ platform: { name } }: { platform: { name: string } }) => (
                <p key={name}>{name}</p>
              ),
            )}
          </CardContent>
          <CardContent
            style={{
              position: 'relative',
              width: '100%',
              height: '300px',
            }}
          >
            <Image
              src={game.background_image}
              alt={game.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
