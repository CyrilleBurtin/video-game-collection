'use server';

import { API_URL, headers } from '@/components/api/apiConfig';

export async function searchGames(gameName: string) {
  try {
    const query = ` fields
      cover,
      release_dates.*,
      first_release_date,
      game_modes.*,
      genres.*,
      id,
      name,
      platforms.*,
      rating,
      rating_count,
      screenshots.*,
      slug,
      summary,
      cover.*,
      url;
      where name ~ *"${gameName}"*;
      limit 300;
      sort first_release_date desc;
      `;

    const response = await fetch(`${API_URL}/games/`, {
      method: 'POST',
      headers,
      body: query,
    });

    return await response.json();
  } catch (error) {
    console.error('Erreur dans searchGames:', error);
    throw error;
  }
}

/*
alternative_names.*,
artworks.*,
bundles.*,
category,
checksum,
collections.*,
cover,
created_at,
external_games.*,
first_release_date,
franchises.*,
game_localizations.*,
game_modes.*,
game_type,
genres.*,
id,
involved_companies.*,
keywords.*,
language_supports.*,
name,
platforms.*,
player_perspectives.*,
ports.*,
rating,
rating_count,
release_dates.*,
remakes.*,
screenshots.*,
similar_games.*,
slug,
storyline,
summary,
tags,
themes.*,
total_rating,
total_rating_count,
updated_at,
url,
videos.*,
websites.*;`;
 */
