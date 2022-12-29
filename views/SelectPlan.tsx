import { Card, CardHeader, CardText } from "../components/common";
import MonthlyYearlyPicker from "../components/ui/monthty-yearly-picker";
import PlansComponent from "../components/ui/plans-component";
function SelectPlan() {
  return(
    <Card>
      <CardHeader>Select your plan</CardHeader>
      <CardText>You have the option of monthly or year billing.</CardText>
      <PlansComponent />
      <MonthlyYearlyPicker />
    </Card>
  )
}

export default SelectPlan
