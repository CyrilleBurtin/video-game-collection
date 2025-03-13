import { Suspense } from 'react';

export default async function Home() {
  return (
    <Suspense fallback={'loading...'}>
      <p>accueil </p>
    </Suspense>
  );
}
