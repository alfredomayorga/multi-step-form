export type PersonalInfo = {
  name: string
  email: string
  phone: number
}

export type Addon = {
  name: string
  price: number
}

export type Plan = {
  name: string
  price: string
}

export type FormContextValues = {
  step: number
  setStep: (step: number) => void
  totalAmount: number
  setTotalAmount: (totalAmount: number) => void
  planSelected: Plan
  setPlanSelected: (planDuration: string) => void
  planDuration: 'Monthly' | 'Yearly'
  setPlanDuration: (planDuration: string) => void
  addonsSelected: Addon[]
  setAddonsSelected: (addonsSelected: Addon[]) => void
}
