'use server';

import { getGameDetails } from '@/components/api/useGetGameDetails';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Game } from '@/interfaces/interfaces';
import Image from 'next/image';
import React from 'react';

export default async function GameInfo({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = parseInt((await params).id, 10);
  const data: Game = await getGameDetails(slug);

  const game_desc = (desc: string) => {
    if (desc) {
      return { __html: desc.split('Español')[0] };
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {data ? (
        <Card>
          <CardHeader>
            <CardTitle>{data.name}</CardTitle>
            <CardDescription>
              <div dangerouslySetInnerHTML={game_desc(data.description)} />
            </CardDescription>
          </CardHeader>
          <CardContent>
            {data.platforms?.map(
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
              src={data.background_image}
              alt={data.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </CardContent>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
