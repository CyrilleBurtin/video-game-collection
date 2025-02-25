'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <div className="flex justify-center">
      <Link href={'/'}>
        <Image
          src="/images/logo-vgc.webp"
          width="150"
          height="150"
          alt="Logo video game collection représenting controllers"
        />
      </Link>
    </div>
  );
}
