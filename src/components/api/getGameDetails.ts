import { API_URL, headers } from '@/components/api/apiConfig';
import { Game } from '@/interfaces/interfaces';

export async function getGameDetails(slug: string): Promise<Game> {
  const query: string = `fields alternative_names.*,
artworks.*,
bundles.*,
category,
checksum,
collections.*,
cover.*,
created_at,
external_games.*,
first_release_date,
franchises.*,
game_localizations.*,
game_modes.*,
game_type.*,
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
websites.*
; where slug = "${slug}";`;
  try {
    const response = await fetch(`${API_URL}/games/`, {
      method: 'post',
      headers,
      body: query,
      cache: 'force-cache',
    });

    const [game] = await response.json();

    return game;
  } catch (error) {
    throw new Error(`An unexpected error occurred while fetching : ${error}`);
  }
}
