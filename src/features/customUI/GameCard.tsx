import { Card } from '@/components/ui/card';
import { Game } from '@/interfaces/interfaces';
import { unixToDate } from '@/lib/utils';
import Link from 'next/link';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => (
  <>
    <Link href={`/game-details/${game.id}`}>
      <Card
        key={game.id}
        className={`color-black rounded-xl border-none bg-cover bg-center shadow-lg shadow-purple-300/10`}
        style={{
          backgroundImage: `url('https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${game?.cover?.image_id}.webp')`,
          height: '274px',
        }}
      ></Card>
    </Link>
    <div className="mt-4 min-h-20 pb-2 text-center">
      <h2>{game.name}</h2>
      <p className="mt-2">{unixToDate(game.first_release_date)}</p>
    </div>
  </>
);

export default GameCard;
