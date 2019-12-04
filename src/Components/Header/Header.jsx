import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <NavLink exact to="/" className="link-tab" activeClassName="selected">Home</NavLink>
      <NavLink to="/contact" className="link-tab" activeClassName="selected">Contact</NavLink>
    </div>
  );
}

export default Header;
