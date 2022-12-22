import { Step } from './Step'
function StepsComponent() {
  const steps = [
    { number: 1, active: true },
    { number: 2, active: false },
    { number: 3, active: false },
    { number: 4, active: false },
  ]
  return (
    <div className="flex flex-row min-w-[180px] justify-between">
      {steps.map((step) => {
        return (
          <Step
            key={step.number}
            step={step.number}
            active={step.active}
          />
        )
      })}
    </div>
  )
}

export default StepsComponent
