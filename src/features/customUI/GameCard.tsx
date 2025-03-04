import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GameProps } from '@/interfaces/interfaces';
import Image from 'next/image';
import Link from 'next/link';

const GameCard = ({ game }: GameProps) => (
  <Card key={game.id}>
    <CardHeader>
      <CardTitle>{game.name}</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <Link href={`/game-details/${game.id}`}>
      <CardContent
        style={{
          position: 'relative',
          width: '100%',
          height: '300px',
        }}
      >
        {game.background_image ? (
          <Image
            src={game.background_image}
            alt="Picture of the author"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        ) : null}
      </CardContent>
    </Link>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
);

export default GameCard;
