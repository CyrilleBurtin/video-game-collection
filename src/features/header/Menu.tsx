import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import React from 'react';

const menuList: { title: string; href: string; description: string }[] = [
  {
    title: 'Home',
    href: '/',
    description: "Retour à la page d'acceuil",
  },
  {
    title: 'Recherche',
    href: '/recherche',
    description: 'Recherchez des jeux vidéo',
  },
];

export default function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <ul className="flex items-center gap-4">
          {menuList.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </NavigationMenuItem>
          ))}
        </ul>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
