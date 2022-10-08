import './Header.css';
import Menu from './Menu.jsx'
import Search from './Search.jsx'
import Registered from './Registered.jsx'
import logo from '../images/logo.png'

function Header() {

  return (

   <div className='header'>
    <div className='block'>
      <img className='logo' src={logo} alt='Logotype'/>
       <Menu/>
    </div>
    <div className='block'>
       <Search/>
       <Registered/>
    </div> 
       
   </div>
  );
}

export default Header;
