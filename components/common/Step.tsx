interface StepProps {
  step: number
  active: boolean
}
export function Step({ step, active }: StepProps) {
  return (
    <button
      className={`
        w-[33px]
        h-[33px]
        rounded-full
        ${
          active
            ? 'bg-sky-blue text-demin'
            : 'border border-white text-white'
        }
     `}
    >
      {step}
    </button>
  )
}
