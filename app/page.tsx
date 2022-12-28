import { Ubuntu } from '@next/font/google'
import ContentViewer from '../views/ContentViewer'
const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
})

export default function Home() {
  return (
    <div className={ubuntu.className + 'flex'}>
      <ContentViewer />
    </div>
  )
}
