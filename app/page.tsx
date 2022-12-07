import { Ubuntu } from '@next/font/google'

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
})

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
  )
}
