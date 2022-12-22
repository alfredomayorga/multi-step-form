import { Ubuntu } from '@next/font/google'
import { Button } from '../components/ui'

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
})

export default function Home() {
  return (
    <div className="flex">
      <Button
        type="primary"
        onClick={() => {}}
      />
      <Button 
        type="secondary"
        onClick={()=> {}}
      />
    </div>
  )
}
