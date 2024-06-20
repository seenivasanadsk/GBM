import { act, useState } from 'react'

function UnitButtons({ click, selectedUnit }) {
  let [totalUnit, setTotalUnit] = useState();
  let [activeClass, setActiveClass] = useState([]);
  const units = ["0.25", "0.5", "1", "2", "3", "4", "5", "6", "0.60", "0.65", "0.70", "0.75", "0.80", "0.85"];
  const buttons = units.map(unit => {
    return <button className={activeClass.includes(unit) ? 'active' : ''} onClick={() => handleButtonClick(unit)} key={unit}>{unit}</button>
  })

  if (selectedUnit == 0 && selectedUnit !== totalUnit) {
    setActiveClass([]);
    setTotalUnit(selectedUnit);
  }

  function handleButtonClick(unit) {
    let values;
    if (activeClass.includes(unit)) {
      values = activeClass
      values.splice(values.indexOf(unit), 1)
    } else {
      values = [...activeClass, unit]
    }
    let sumUnit = values.length ? values.reduce((value, total) => parseFloat(total) + parseFloat(value)) : 0;
    setActiveClass(values)
    setTotalUnit(sumUnit)
    click(sumUnit)
  }

  function handleNumberInput(e) {
    setTotalUnit(e.target.value);
    click(e.target.value)
    setActiveClass([]);
  }

  return (
    <div className='button-groups'>
      <input type="number" step={0.05} min={0} max={10} onChange={handleNumberInput} value={totalUnit} />
      {buttons}
    </div>
  )
}

export default UnitButtons