import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Menu from 'react-burger-menu/lib/menus/slide';

import Nav from './nav';
import './header.scss';

const Header = ({ siteTitle }) => (
  <div className="header">
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <Menu right slide width="100%">
      <Nav />
    </Menu>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
