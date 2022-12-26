'use client'
interface CheckboxProps {
  checked: boolean
  setChecked: (checked: boolean) => void
}

export function Checkbox({ checked, setChecked }: CheckboxProps) {
  return (
    <input
      type="Checkbox"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      className="
        text-purple 
        focus:ring-0 
        focus:ring-offset-0
        rounded
        h-[20px]
        w-[20px]
        border-border-color
      "
    />
  )
}
