export interface Game {
  name: string;
  id: number;
  artworks: { url: string; height: number; width: number }[];
  cover: { url: string; height: number; width: number; image_id: string };
  first_release_date: number;
  release_dates: {
    date: number;
  }[];
  platforms: { abbreviation: string; slug: string }[];
  rating: number;
  rating_count: number;
  screenshots: { url: string; height: number; width: number };
  slug: string;
  summary: string;
}

export interface GameProps {
  game: Game;
  key?: number;
}

export interface GameSearchResponse {
  results: Game[];
}

export interface Store {
  name: string;
  image_background: string;
  domain: string;
  id: number;
  games: Game[];
  slug: string;
}
