import { useState } from 'react'
import './price/price.css'
import ItemButtons from './price/ItemButtons.jsx'
import UnitButtons from './price/UnitButtons.jsx'
import LocationSelector from './price/LocationSelector.jsx'

function PriceCalculator() {
  const [item, setItem] = useState({})
  const [location, setLocation] = useState({})
  const [unit, setUnit] = useState(0)
  const [toggleLocation, setToggleLocation] = useState(true)
  const totalAmount = calculateAmount()

  function calculateAmount() {
    let unitamount;
    if (unit == 0 || !Object.keys(location).length) {
      unitamount = 0;
    }
    else if (unit <= 0.25) {
      unitamount = parseInt(location[`unit${1}`]/2);
    } else if (unit > 0.25 && unit <= 1) {
      unitamount = parseInt(location[`unit${1}`]);
    } else {
      unitamount = (parseInt(location[`unit${2}`])/2) * unit;
    }
    return (item && item.price ? item.price : 0) * (unit) + unitamount
  }
  function handleClear() {
    setUnit(0)
    setItem({})
    setLocation({})
  }

  return (
    <main>
      <div className="output">
        &#8377;
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button onClick={handleClear} style={{color: 'red'}}>C</button>
        <button>D</button>
      </div>
      <div className="data-inputs">
        <ItemButtons click={item=>setItem(item)} selectedItem={item}></ItemButtons>
        <UnitButtons click={unit=>setUnit(unit)} selectedUnit={unit}></UnitButtons>
        <LocationSelector click={location=>setLocation(location)} selectedLocation={location.ename}></LocationSelector>
      </div>
    </main>
  )
}

export default PriceCalculator