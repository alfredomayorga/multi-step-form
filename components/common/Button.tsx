interface ButtonProps {
  onClick: () => void
  type: 'primary' | 'secondary'
}
export function Button({ onClick, type }: ButtonProps) {
  if (type === 'primary')
    return (
      <button
        className="
        bg-demin 
        rounded-md 
        text-white
        text-center
        leading-[40px]
        w-[97px]
        h-[40px]
      "
      >
        Next Step
      </button>
    )
  return (
    <button
      className="
         w-[97px]
         h-[40px]
         text-center
         leading-[40px]
        "
    >
      Go Back
    </button>
  )
}
