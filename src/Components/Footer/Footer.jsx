import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">Footer</div>
  );
}

Footer.protoTypes = {
  details: PropTypes.any.isRequired,
};

export default Footer;
