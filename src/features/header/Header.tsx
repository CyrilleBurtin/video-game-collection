'use client';

import LoginBar from '@/features/header/LoginBar';
import Menu from '@/features/header/Menu';
import UserBar from '@/features/header/UserBar';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between gap-4 px-4">
      <Link href="/">
        <Image
          src="/images/logo-vgc.webp"
          width="150"
          height="150"
          alt="Logo video game collection représenting controllers"
        />
      </Link>
      <Menu />

      {session ? <UserBar /> : <LoginBar />}
    </div>
  );
}
