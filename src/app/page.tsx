'use client';

import getToken from '@/components/api/getToken';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const fetchToken = async () => {
      try {
        await getToken();
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    };
    fetchToken();
  }, []);

  return (
    <div className="">
      <main className="">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>hello</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </main>
      <footer className=""></footer>
    </div>
  );
}
