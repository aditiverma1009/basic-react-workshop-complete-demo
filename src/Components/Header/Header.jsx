import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

function Header(props) {
  const { selectedPage, handleChangeTab } = props;
  return (
    <div className="header">
      <input type="button" className={selectedPage === 'home' ? 'selected' : ''} value="Home" onClick={() => handleChangeTab('home')} />
      <input type="button" className={selectedPage === 'contact' ? 'selected' : ''} value="Contact" onClick={() => handleChangeTab('contact')} />
    </div>
  );
}

Header.protoTypes = {
  details: PropTypes.any.isRequired,
};

export default Header;
