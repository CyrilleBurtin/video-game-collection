import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const unixToDate = (time: number) => {
  const date = new Date(time * 1000);
  return date.toLocaleDateString('fr-FR');
};
