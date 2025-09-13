import { Metadata } from 'next';
import HiddenPlayerClient from './HiddenPlayerClient';

export const metadata: Metadata = {
  title: 'Hidden Player Profile - CrTiers',
  description: 'View hidden player statistics and rankings on CrTiers',
};

export async function generateStaticParams(): Promise<{ username: string }[]> {
  // Generate a few common hidden player names for static generation
  // Real usernames will be handled by the client-side routing
  return [
    { username: 'hiddenplayer1' },
    { username: 'hiddenplayer2' },
    { username: 'hiddenplayer3' },
    { username: 'testuser' },
    { username: 'example' },
  ];
}

export default function HiddenPlayerPage() {
  return <HiddenPlayerClient />;
}