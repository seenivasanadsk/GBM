import { useState } from 'react'
import { areas as location } from '../data.js'

function LocationSelector({click, selectedLocation}) {
  let [search, setSearch] = useState('')
  let searchedLocation = location.filter(l => l.ename.toLowerCase().includes(search.toLowerCase()))
  let locations = searchedLocation.map(sl => {
    return <div className={selectedLocation == sl.ename ? 'location active' : 'location'} key={sl.ename} onClick={() => click(sl)}>
      <div className="ename">{sl.ename}</div>
      <div className="tname">{sl.name}</div>
    </div>
  })

  return (
    <div className='location-selector'>
      <input type="search" id="search" onChange={e => setSearch(e.target.value)} />
      {locations}
    </div>
  )
}

export default LocationSelector