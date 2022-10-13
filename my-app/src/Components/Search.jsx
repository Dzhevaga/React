import './Search.css';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
 
function Search() {


  return (
   <div className='search'>
        <input className='search' type='text' />
        <MagnifyingGlassIcon className = "className=h-6 w-6 "/> 
      
  </div>
  );
}

export default Search;
