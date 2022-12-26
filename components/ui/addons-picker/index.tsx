import Addon from './Addon'
import addons from './addons-data.json'
function AddonsPicker() {
  return (
    <div className="flex flex-col gap-3">{addons.data.map(addon=> {
      return(
        <Addon 
          key={addon.id}
          name={addon.name}
          description={addon.description}
          price={addon.price}
        />
      )
    })}</div>
  )
}

export default AddonsPicker
