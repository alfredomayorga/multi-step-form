'use client'

import Tracker from "../components/ui/tracker-component"
import FormContextProvider from "../context/FormContext"

function ContentViewer() {
  return(
    <FormContextProvider>
      <Tracker />
    </FormContextProvider>  
  )
}

export default ContentViewer
