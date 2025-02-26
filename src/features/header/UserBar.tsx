'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { signOut, useSession } from 'next-auth/react';

const UserBar = () => {
  const { data } = useSession();

  const image = data?.user?.image || undefined;
  const name = data?.user?.name?.[0];

  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src={image} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default UserBar;
