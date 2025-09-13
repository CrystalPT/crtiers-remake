import PlayerClient from './PlayerClient'

export async function generateStaticParams() {
  return []
}

export default function Page() {
  return <PlayerClient />
}