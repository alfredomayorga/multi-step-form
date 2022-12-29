'use client'

import Tracker from "../components/ui/tracker-component"
import FormContextProvider from "../context/FormContext"
import FinishingUp from "./FinishingUp"
import PersonalInfo from "./PersonalInfo"
import PickAddons from "./PickAddons"
import SelectPlan from "./SelectPlan"

function ContentViewer() {
  return(
    <FormContextProvider>
      <Tracker />
      {/* <PersonalInfo /> */}
     {/*<SelectPlan /> */}
      {/* <PickAddons /> */ }
     <FinishingUp /> 
    </FormContextProvider>  
  )
}

export default ContentViewer
