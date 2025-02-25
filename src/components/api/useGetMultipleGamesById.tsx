'use server';

import { GAME_BY_ID } from '@/components/api/apiUrls';

const fetchGamesById = async (id: number) => {
  const response = await fetch(GAME_BY_ID(id));
  if (!response.ok) throw new Error(`Erreur pour l'ID ${id}`);

  return response.json();
};

export default async function getMultipleGamesById() {
  return Promise.all([3498, 3320, 4200].map((id) => fetchGamesById(id)));
}
