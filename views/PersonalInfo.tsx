import { Card, CardHeader, CardText, Input } from '../components/common'

function PersonalInfo() {
  return (
    <Card>
      <CardHeader>Personal Info</CardHeader>
      <CardText>
        Please provide your name, email, address and phone number.
      </CardText>
      <form className="flex flex-col gap-4">
        <Input 
          type="text"
          labelText='Name'
          placeholder='e.g Stephen King'
        />
        <Input 
          type="email"
          labelText="Email Address"
          placeholder="e.g stephen@king.com"
        />
        <Input 
          type="tel"
          labelText="Phone Number"
          placeholder="e.g 123 4567"
        />
      </form>
    </Card>
  )
}

export default PersonalInfo
