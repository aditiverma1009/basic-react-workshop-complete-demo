import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <NavLink exact to="/" className="link-tab" activeClassName="selected">Home</NavLink>
      <NavLink to="/contact" className="link-tab" activeClassName="selected">Contact</NavLink>
      {/* <input type="button" className={selectedPage === 'contact' ? 'selected' : ''} value="Contact" onClick={() => handleChangeTab('contact')} /> */}
    </div>
  );
}

Header.protoTypes = {
  details: PropTypes.any.isRequired,
};

export default Header;
