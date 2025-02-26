'use client';

import LoginBar from '@/features/header/LoginBar';
import UserBar from '@/features/header/UserBar';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between gap-4 px-4">
      <Image
        src="/images/logo-vgc.webp"
        width="150"
        height="150"
        alt="Logo video game collection représenting controllers"
      />
      {session ? <UserBar /> : <LoginBar />}
    </div>
  );
}
