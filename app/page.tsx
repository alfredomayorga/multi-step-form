import { Ubuntu } from '@next/font/google'
import { BackgroundImage } from '../components/common/BackgroundImage'
import PersonalInfo from '../views/PersonalInfo'
const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
})

export default function Home() {
  return (
    <div className={ubuntu.className + 'flex'}>
      <BackgroundImage />
      <PersonalInfo />
    </div>
  )
}
