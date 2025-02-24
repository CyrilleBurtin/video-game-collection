'use server';

import { Game, getGameDetails } from '@/components/api/useGetGameDetails';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
    <div>
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
          <CardContent>
            <Image
              src={data.background_image}
              alt={data.name}
              width={300}
              height={300}
            />
          </CardContent>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
