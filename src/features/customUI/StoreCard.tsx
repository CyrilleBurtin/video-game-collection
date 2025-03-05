import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Store } from '@/interfaces/interfaces';
import Image from 'next/image';
import Link from 'next/link';

interface StoreCardProps {
  store: Store;
}

const GameCard = ({ store }: StoreCardProps) => {
  console.log(store);
  return (
    <Card key={store.id}>
      <CardHeader>
        <CardTitle>{store.name}</CardTitle>
      </CardHeader>
      <Link href={`/store/${store.slug}`}>
        <CardContent
          style={{
            position: 'relative',
            width: '100%',
            height: '300px',
          }}
        >
          {store.image_background ? (
            <Image
              src={store.image_background}
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
};
export default GameCard;
