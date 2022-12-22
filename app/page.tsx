import { Ubuntu } from '@next/font/google'
import { Button, Input } from '../components/common'
import StepsComponent from '../components/ui/steps-component'

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
})

export default function Home() {
  return (
    <div className={ubuntu.className + "flex"}>
      <Button
        type="primary"
        onClick={() => {}}
      />
      <Button 
        type="secondary"
        onClick={()=> {}}
      />
      <div className="flex flex-col">
        <Input 
          type="text"
          placeholder="e.g Stephen King"
          labelText='Name'
        /> 
        <Input 
          type="email"
          placeholder="e.g sking@lorem.com"
          labelText='Email'
        /> 
        <Input 
          type="tel"
          placeholder="e.g +972 123 4321"
          labelText='Phone Number'
        /> 
      </div>
      <StepsComponent />
    </div>
  )
}
