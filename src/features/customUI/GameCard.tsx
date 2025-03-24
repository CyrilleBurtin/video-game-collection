'use client';

// Comme c'est un composant interactif, on le rend côté client
import { Game } from '@/interfaces/interfaces';
import { unixToDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type GameCardProps = {
  game: Game;
};

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link
      href={`/game/${game.slug}`}
      className="block overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    >
      {/* Image de couverture */}
      <div className="relative h-48 w-full">
        <Image
          src={
            game.cover?.image_id
              ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.webp`
              : '/placeholder-game-cover.jpg' // Image par défaut si pas de couverture
          }
          alt={game.name}
          fill
          className="object-cover"
          priority={false} // Pas besoin de priority ici, car utilisé dans une liste
        />
      </div>

      {/* Contenu */}
      <div className="p-4">
        {/* Titre */}
        <h3 className="truncate text-lg font-semibold text-gray-900">
          {game.name}
        </h3>

        {/* Plateformes */}
        <div className="mt-2 flex flex-wrap gap-2">
          {game.platforms?.map(({ abbreviation }) => (
            <span
              key={abbreviation}
              className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700"
            >
              {abbreviation}
            </span>
          ))}
        </div>

        {/* Date de sortie */}
        <p className="mt-2 text-sm text-gray-500">
          {game.first_release_date
            ? `Sortie : ${unixToDate(game.first_release_date)}`
            : 'Date non précisée'}
        </p>

        {/* Résumé (optionnel, au survol) */}
        {game.summary && (
          <div className="p-2 text-sm text-gray-600">
            <p className="line-clamp-3">{game.summary}</p>
          </div>
        )}
      </div>
    </Link>
  );
}
