export interface Game {
  name: string;
  description: string;
  platforms: { platform: { name: string } }[];
  background_image: string;
  id: number;
}

export interface GameProps {
  game: Game;
  key?: number; // key est optionnel et géré par React
}
