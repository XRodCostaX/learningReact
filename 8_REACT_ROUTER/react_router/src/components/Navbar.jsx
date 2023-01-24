// 2 - Links com react router

import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link> */}
      <NavLink to="/">
        {/* <NavLink to="/" className={({ isActive }) => (isActive ? 'esta-ativo' : 'nao-ativo')}> */}
        Home
      </NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
}

export default Navbar;
