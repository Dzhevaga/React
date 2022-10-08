import './Search.css';
import search from '../images/search.png'

function Search() {


  return (
   <div className='search'>
        <input className='search' type='text' />
        <img className='search-icon' src = {search}/>
       
    </div>
  );
}

export default Search;
