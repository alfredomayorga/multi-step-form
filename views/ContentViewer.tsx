'use client'

import Tracker from "../components/ui/tracker-component"
import FormContextProvider from "../context/FormContext"
import PersonalInfo from "./PersonalInfo"

function ContentViewer() {
  return(
    <FormContextProvider>
      <Tracker />
      <PersonalInfo />
    </FormContextProvider>  
  )
}

export default ContentViewer
