import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 space-y-10 bg-gray-700">
      <Image src="/next.svg" alt="Vercel Logo" width="100" height="100" />
      <Button>Button</Button>
    </div>
  )
}
