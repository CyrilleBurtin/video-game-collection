export interface Game {
  name: string;
  id: number;
  artworks: { url: string; height: number; width: number }[];
  cover: { url: string; height: number; width: number; image_id: string };
  game_type: {
    id: number;
    type: string;
  };
  first_release_date: number;
  release_dates: {
    date: number;
  }[];
  keywords: { name: string }[];
  platforms: { abbreviation: string; slug: string; name: string }[];
  rating: number;
  rating_count: number;
  screenshots: {
    url: string;
    height: number;
    width: number;
    image_id: number;
  }[];
  slug: string;
  summary: string;
}
