import ButtonGroup from './components/ButtonGroup'
import data from './data.json'

function App() {
  return (
    <>
      <h1>Price Calculator</h1>
      <div id="output">
        &#8377; <span>0000</span>
      </div>
      <div className="button-section">
        <ButtonGroup items={data.items}></ButtonGroup>
        <ButtonGroup items={data.units}></ButtonGroup>
        <ButtonGroup></ButtonGroup>
      </div>
    </>
  )
}

export default App
