'use server';

import { API_URL, headers } from '@/components/api/apiConfig';
import { Game } from '@/interfaces/interfaces';

export async function searchGames(gameName: string) {
  try {
    const query = ` fields
      cover,
      release_dates.*,
      first_release_date,
      game_modes.*,
      game_type.*,
      genres.*,
      id,
      keywords.*,
      name,
      platforms.*,
      rating,
      rating_count,
      screenshots.*,
      slug,
      summary,
      cover.*,
      url;
      where name ~ *"${gameName}"* 
      & (game_type.type = "Main Game"
        | game_type.type = "Remaster"
        | game_type.type = "expansion"
        | game_type.type = "bundle"
        | game_type.type = "standalone_expansion"
        | game_type.type = "episode"
        | game_type.type = "season"
        | game_type.type = "remake"
        | game_type.type = "remaster"
        )
      & platforms.abbreviation != "Linux"
      & platforms.abbreviation != "Mac"
      & platforms.abbreviation != "PC"
      & platforms.abbreviation != "browser"
      & platforms.abbreviation != "DOS"
      & platforms.abbreviation != "Arcade"
      & cover.url != null
      & first_release_date != null;
      limit 30;
      sort first_release_date desc;
      `;

    const response = await fetch(`${API_URL}/games/`, {
      method: 'POST',
      headers,
      body: query,
      cache: 'force-cache',
    });
    const games = await response.json();

    const filteredGames = games.filter((game: Game) => {
      if (!game.keywords || game.keywords.length === 0) return true;

      return !game.keywords.some((keyword) => {
        const keywordName = keyword.name.toLowerCase();
        return (
          keywordName.includes('unofficial') || keywordName.includes('fangame')
        );
      });
    });

    console.log(`Nombre de jeux avant filtrage : ${games.length}`);
    console.log(`Nombre de jeux après filtrage : ${filteredGames.length}`);

    return filteredGames;
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
