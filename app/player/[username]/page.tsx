import { Metadata } from 'next';
import PlayerClient from './PlayerClient';

export const metadata: Metadata = {
  title: 'Player Profile - CrTiers',
  description: 'View player statistics and rankings on CrTiers',
};

export async function generateStaticParams(): Promise<{ username: string }[]> {
  // Generate a few common player names for static generation
  // Real usernames will be handled by the client-side routing
  return [
    { username: 'player1' },
    { username: 'player2' },
    { username: 'player3' },
    { username: 'testuser' },
    { username: 'example' },
  ];
}

export default function PlayerPage() {
  return <PlayerClient />;
}