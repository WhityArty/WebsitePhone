import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

import './index.css';


function Header({children}) {
  return (
    <header className='header'>
        <Logo />
      <div className="container">
        <div className="header__wrapper">

        </div>
      </div>
    </header>
  )
}

export default Header;
