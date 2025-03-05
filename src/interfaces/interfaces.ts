export interface Game {
  name: string;
  description: string;
  platforms: { platform: { name: string } }[];
  background_image: string;
  id: number;
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
