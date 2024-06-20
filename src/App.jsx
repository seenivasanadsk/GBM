import { useState } from 'react'
import MoneyCalculator from './MoneyCalculator';
import PriceCalculator from './PriceCalculator';

function App() {
  let [tab, setTab] = useState('PRICE');
  return (
    <>
      <nav>
          <div onClick={()=>{setTab('PRICE')}}>&#128176; <span>Price</span> </div>
          <div onClick={()=>{setTab('MONEY')}}>&#128181; <span>Money</span> </div>
      </nav>
      {
        tab == 'MONEY' ? <MoneyCalculator/> : <PriceCalculator/>
      }
    </>
  )
}

export default App
