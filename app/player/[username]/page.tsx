import { Metadata } from 'next';
import PlayerClient from './PlayerClient';

export const metadata: Metadata = {
  title: 'Player Profile - CrTiers',
  description: 'View player statistics and rankings on CrTiers',
};

export async function generateStaticParams(): Promise<{ username: string }[]> {
  // For static export, we need to pre-generate some common routes
  // The client will handle dynamic usernames at runtime
  return [
    { username: 'steve' },
    { username: 'alex' },
    { username: 'notch' },
    { username: 'jeb' },
    { username: 'dinnerbone' },
    { username: 'grumm' },
    { username: 'player' },
    { username: 'user' },
    { username: 'test' },
    { username: 'example' },
  ];
}

export default function PlayerPage() {
  return <PlayerClient />;
}