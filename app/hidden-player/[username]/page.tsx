import { Metadata } from 'next';
import HiddenPlayerClient from './HiddenPlayerClient';

export const metadata: Metadata = {
  title: 'Hidden Player Profile - CrTiers',
  description: 'View hidden player statistics and rankings on CrTiers',
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

export default function HiddenPlayerPage() {
  return <HiddenPlayerClient />;
}