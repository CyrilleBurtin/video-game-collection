import { getAllGames } from '@/components/api/useGetGames';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const { results } = await getAllGames();

  return (
    <div className="">
      <main className="grid grid-cols-2 gap-4">
        {results.map(
          ({
            name,
            id,
            background_image,
          }: {
            name: string;
            id: number;
            background_image: string;
          }) => {
            return (
              <Card key={id}>
                <CardHeader>
                  <CardTitle>{name}</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <Link href={`/game-details/${id}`}>
                  <CardContent
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '300px',
                    }}
                  >
                    <Image
                      src={background_image}
                      alt="Picture of the author"
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </CardContent>
                </Link>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            );
          },
        )}
      </main>
      <footer className=""></footer>
    </div>
  );
}
