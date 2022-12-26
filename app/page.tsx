import { Ubuntu } from '@next/font/google'
import MonthlyYearlyPicker from '../components/ui/monthty-yearly-picker'
const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
})

export default function Home() {
  return (
    <div className={ubuntu.className + 'flex'}>
      <MonthlyYearlyPicker />
    </div>
  )
}
