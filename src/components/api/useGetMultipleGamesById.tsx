'use server';

import { GAME_BY_ID } from '@/components/api/apiUrls';

const fetchGamesById = async (id: number) => {
  try {
    const response = await fetch(GAME_BY_ID(id));

    return response.json();
  } catch (error) {
    throw new Error(`An unexpected error occurred while fetching : ${error}`);
  }
};

export default async function getMultipleGamesById() {
  return Promise.all([3498, 3320, 4200].map((id) => fetchGamesById(id)));
}
