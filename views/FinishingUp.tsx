import { Card, CardHeader, CardText } from '../components/common'

function FinishingUp() {
  // Replace these with context values
  const planSelected = { name: 'Arcade', price: 9 }
  const planDuration = 'Monthly'

  const addons = [
    {
      name: 'Online service',
      price: 1,
    },
    {
      name: 'Larger storage',
      price: 2,
    },
  ]

  const totalAmount = 12

  return (
    <Card>
      <CardHeader>Finishing Up</CardHeader>
      <CardText>
        Double-check everything looks ok before confirming
      </CardText>
      <div
        style={{ backgroundColor: '#F8F9FF', paddingTop: '12px' }}
        className="px-4 rounded-xl"
      >
        <div className="planSummary flex flex-col">
          <div className="text-demin">
            {planSelected.name}({planDuration})
          </div>
          <div className="flex flex-row justify-between items-center">
            <button
              style={{ textDecoration: 'underline' }}
              className="text-gray"
            >
              Change
            </button>
            <div className="text-demin">${planSelected.price}/mo</div>
          </div>
          <hr
            style={{ borderTop: '1px solid #ddd', margin: '12px 0' }}
          />
          <div>
            {addons.map((addon) => {
              return (
                <div
                  key={addon.name}
                  className="
                    flex 
                    flex-row 
                    justify-between 
                    items-center
                    mb-4
                    last:mb-0
                  "
                >
                  <div className="text-gray">{addon.name}</div>
                  <div className="text-demin">${addon.price}/mo</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center px-4 mt-4">
        <div className="text-gray">Total(per month)</div>
        <div className="text-purple font-bold text-[16px]">
          +${totalAmount}/mo
        </div>
      </div>
    </Card>
  )
}

export default FinishingUp
