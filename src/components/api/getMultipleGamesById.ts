'use server';

import { getGameDetails } from '@/components/api/getGameDetails';

export default async function getMultipleGamesById() {
  return Promise.all([3498, 3320, 4200].map((id) => getGameDetails(id)));
}
