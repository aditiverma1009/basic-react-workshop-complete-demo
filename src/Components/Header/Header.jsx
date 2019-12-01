import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: 'home',
    };
  }

  handleChangeTab = (value) => {
    if (value === 'contact') {
      this.setState({
        selectedPage: 'contact',
      });
    } else {
      this.setState({
        selectedPage: 'home',
      });
    }
  }

  render() {
    const { selectedPage } = this.state;
    return (
      <div className="header">
        <input type="button" className={selectedPage === 'home' ? 'selected' : ''} value="Home" onClick={() => this.handleChangeTab('home')} />
        <input type="button" className={selectedPage === 'contact' ? 'selected' : ''} value="Contact" onClick={() => this.handleChangeTab('contact')} />
      </div>
    );
  }
}

Header.protoTypes = {
  details: PropTypes.any.isRequired,
};

export default Header;
