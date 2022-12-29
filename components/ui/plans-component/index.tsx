import plans from './plans-data.json'
import { Icon } from './Icon'
import { Plan } from './Plan'

type Plan = {
  id: number
  name: string
  price: number
  icon: string
  color: string
}
function PlansComponent() {
  return (
    <div className="flex flex-col gap-4">
      {plans.data.map((plan: Plan) => {
        return (
          <button
            key={plan.id}
            className="
              flex 
              flex-row
              items-center
              h-[77px]
              border
              border-border-color
              rounded-lg
              focus:border-purple
              focus:bg-light-bg
            "
          >
            <Icon
              icon={plan.icon}
              color={plan.color}
            />
            <Plan
              name={plan.name}
              price={plan.price}
            />
          </button>
        )
      })}
    </div>
  )
}

export default PlansComponent
