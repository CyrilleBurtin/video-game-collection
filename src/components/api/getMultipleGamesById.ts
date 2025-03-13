'use server';

import { getGameDetails } from '@/components/api/getGameDetails';

export default async function getMultipleGamesById(ids: number[]) {
  return Promise.all(ids.map((id) => getGameDetails(id)));
}
