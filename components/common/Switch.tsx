'use client'
import * as Switch from '@radix-ui/react-switch'
interface SwitchComponentProps {
  checked: boolean
  setChecked: (checked: boolean) => void
}

export function SwitchComponent({
  checked,
  setChecked,
}: SwitchComponentProps) {
  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={(e)=> setChecked(e)}
      className="
        bg-demin 
        w-[38px] 
        h-[20px] 
        rounded-full
      "
    >
      <Switch.Thumb
        style={{
          transform: checked ? 'translateX(18px)' : 'translateX(0px)',
          transition: 'all ease 200ms'
        }}
        className="
          rounded-full 
          bg-white 
          h-[12px] 
          w-[12px] 
          block
          ml-1
        "
      />
    </Switch.Root>
  )
}
