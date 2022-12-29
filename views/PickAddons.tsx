import { Card, CardHeader, CardText } from "../components/common";
import AddonsPicker from "../components/ui/addons-picker";

function PickAddons() {
  return(
    <Card>
      <CardHeader>Pick add-ons</CardHeader>
      <CardText>Add-ons help enhance your gaming experience</CardText>
      <AddonsPicker />
    </Card>
  )
}

export default PickAddons
