import { createContext, useState } from 'react'
import type { FormContextValues, Addon } from '../types/common.types'

export const FormContext = createContext<FormContextValues | null>(
  null
)

interface IProps {
  children: React.ReactNode
}

function FormContextProvider({ children }: IProps) {
  const [step, setStep] = useState<number>(0)
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [planSelected, setPlanSelected] = useState<string>('')  
  const [planDuration, setPlanDuration] = useState<string>('')
  const [addonsSelected, setAddonsSelected] = useState<Addon[]>([])
  const values = {
    step,
    setStep,
    totalAmount,
    setTotalAmount,
    planSelected,
    setPlanSelected,
    addonsSelected,
    setAddonsSelected
  } as FormContextValues
  return (
    <FormContext.Provider value={values}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContextProvider
