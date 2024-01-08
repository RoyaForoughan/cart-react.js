import {ImSearch} from 'react-icons/im'
import { createQueryObject } from '../helpers/helpers'


function SearchBox({search , setSearch , setQuery}) {

    const searchHandler = () => {
        setQuery((query) => createQueryObject(query , {search}))
      } 


  return (
    <div>
    <input 
            type="text" 
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value.toLowerCase().trim())}/>
    <button>
      <ImSearch  onClick={searchHandler}/>
    </button>
  </div>
  )
}

export default SearchBox