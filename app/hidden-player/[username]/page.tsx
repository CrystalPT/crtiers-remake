import HiddenPlayerClient from './HiddenPlayerClient'

export async function generateStaticParams() {
  return []
}

export default function Page() {
  return <HiddenPlayerClient />
}