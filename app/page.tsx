import { Ubuntu } from '@next/font/google'
import { Button, Input } from '../components/common'
import AddonsPicker from '../components/ui/addons-picker'
import PlansComponent from '../components/ui/plans-component'
import StepsComponent from '../components/ui/steps-component'

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
})

export default function Home() {
  return (
    <div className={ubuntu.className + "flex"}>
      <AddonsPicker />
    </div>
  )
}
