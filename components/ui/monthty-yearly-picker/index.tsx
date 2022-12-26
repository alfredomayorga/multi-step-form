'use client'
import { useState } from 'react'
import { SwitchComponent } from '../../common'

function MonthlyYearlyPicker() {
  const [checked, setChecked] = useState<boolean>(true)
  return (
    <div
      className="
        flex 
        flex-row 
        items-center 
        justify-center
        bg-very-light-grey
        rounded-lg
        h-[48px]
        max-w-[295px]
      "
    >
      <div
        style={{ color: !checked ? '#022959' : '#9699AA' }}
        className="mr-4"
      >
        Monthly
      </div>
      <SwitchComponent
        checked={checked}
        setChecked={setChecked}
      />
      <div
        style={{ color: checked ? '#022959' : '#9699AA' }}
        className="ml-4"
      >
        Yearly
      </div>
    </div>
  )
}

export default MonthlyYearlyPicker
