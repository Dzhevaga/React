import {NavLink} from 'react-router-dom';

import './Menu.css';




function Menu() {


  return (
   <ul className='menu'>
       <li>

           <NavLink className= {({isActive}) => "nav-link" + (isActive ? " selected" : "")} to='/home'>Home</NavLink>
       </li>

       <li>
            <NavLink className= {({isActive}) => "nav-link" + (isActive ? " selected" : "")} to='/movies'>Movies</NavLink>
      </li>

       <li>
       <NavLink className= {({isActive}) => "nav-link" + (isActive ? " selected" : "")} to='/tvshow'>TVShow</NavLink>
       </li>

       <li>
       <NavLink className= {({isActive}) => "nav-link" + (isActive ? " selected" : "")} to='/contacts'>Contact</NavLink>
       </li> 
   </ul>
  );
}

export default Menu;
