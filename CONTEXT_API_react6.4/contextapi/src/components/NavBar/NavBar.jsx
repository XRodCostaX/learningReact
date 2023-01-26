import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Produtos</NavLink>
        <NavLink to="/about">Sobre</NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
