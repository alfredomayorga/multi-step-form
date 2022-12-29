'use client'

import Tracker from "../components/ui/tracker-component"
import FormContextProvider from "../context/FormContext"
import PersonalInfo from "./PersonalInfo"
import PickAddons from "./PickAddons"
import SelectPlan from "./SelectPlan"

function ContentViewer() {
  return(
    <FormContextProvider>
      <Tracker />
      {/* <PersonalInfo /> */}
     {/*<SelectPlan /> */}
      <PickAddons />
    </FormContextProvider>  
  )
}

export default ContentViewer
