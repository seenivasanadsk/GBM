import Button from './Button'


function ButtonGroup({items = []}) {
    let buttons = items.map(i => <Button text={i.name}></Button>)
  return (
    <div className="button-group">
        {buttons}
    </div>
  )
}

export default ButtonGroup