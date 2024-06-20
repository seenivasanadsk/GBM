import { items } from '../data'

function ItemButtons({ click, selectedItem }) {
  const buttons = items.map(item => {
    return <button className={selectedItem?.name == item.name ? 'active' : ''} onClick={() => click(item)} key={item.name}>
              {item.name}
            </button>
  })
  return (
    <div className='button-groups'>
      {buttons}
    </div>
  )
}

export default ItemButtons