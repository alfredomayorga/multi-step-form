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
}
