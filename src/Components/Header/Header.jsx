import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: 'contact',
    };
  }

  render() {
    const { selectedPage } = this.state;
    return (
      <div className="header">
        <div className={selectedPage === 'home' ? 'selected' : ''}>Home</div>
        <div className={selectedPage === 'contact' ? 'selected' : ''}>Contact</div>
      </div>
    );
  }
}

Header.protoTypes = {
  details: PropTypes.any.isRequired,
};

export default Header;
