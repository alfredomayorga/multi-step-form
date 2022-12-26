'use client'
import { useState } from 'react'
import { Checkbox } from '../../common'

interface AddonProps {
  name: string
  description: string
  price: number
}
function Addon({ name, description, price }: AddonProps) {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <div
      style={{
        borderColor: checked ? '#483EFF' : '#D6D9E6',
        backgroundColor: checked ? '#F8F9FF' : 'transparent',
      }}
      className="
        flex 
        flex-row 
        items-center 
        justify-center
        rounded-lg
        border
        border-border-color
        max-w-[295px]
        h-[62px]
      "
    >
      <div className="flex-[0.25] flex items-center justify-center">
        <Checkbox
          checked={checked}
          setChecked={setChecked}
        />
      </div>
      <div className="flex flex-col items-start flex-1">
        <div className="text-[14px] font-bold">{name}</div>
        <div className="text-[12px] text-gray">{description}</div>
      </div>
      <div className="text-purple text-body-md flex-[0.3]">
        ${price}/mo
      </div>
    </div>
  )
}

export default Addon
