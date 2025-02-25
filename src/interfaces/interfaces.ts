export interface Game {
  name: string;
  description: string;
  platforms: { platform: { name: string } }[];
  background_image: string;
}
