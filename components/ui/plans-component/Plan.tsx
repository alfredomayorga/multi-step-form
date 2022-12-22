interface PlanProps {
  name: string
  price: string
}

export function Plan({ name, price }: PlanProps) {
  return (
    <div className="flex flex-col justify-start text-left">
      <h1 className="text-demin text-body-lg">{name}</h1>
      <p className="text-gray text-body-md">{price}</p>
    </div>
  )
}
