// src/app/playonline/play-hexa-sort.tsx

import { Metadata } from 'next';
import HexaSortPageClient from './page';

export const metadata: Metadata = {
  title: 'Play Hexa Sort Online - Free Color-Matching Puzzle Game',
  description: 'Play Hexa Sort online for free. A relaxing yet challenging color-matching puzzle game with multi-layered hexagonal tiles. Sort and stack tiles to clear the board and progress through hundreds of levels.',
  keywords: 'Hexa Sort, puzzle game, color matching, online game, free game, hexagon tiles, strategy game',
  openGraph: {
    title: 'Play Hexa Sort Online - Free Color-Matching Puzzle Game',
    description: 'Play Hexa Sort online for free. A relaxing yet challenging color-matching puzzle game with multi-layered hexagonal tiles.',
    images: ['/hexa-sort-social.jpg'],
    url: 'https://www.yoursite.com/play-hexa-sort',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Play Hexa Sort Online - Free Color-Matching Puzzle Game',
    description: 'Play Hexa Sort online for free. A relaxing yet challenging color-matching puzzle game with multi-layered hexagonal tiles.',
    images: ['/hexa-sort-twitter.jpg'],
  },
};

export default function HexaSortPage() {
  return <HexaSortPageClient />;
}
