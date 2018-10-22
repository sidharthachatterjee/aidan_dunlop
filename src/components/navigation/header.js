import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Nav from './nav';
import './header.scss';

const pageConfig = [
  { title: 'cv', href: '/cv' },
  { title: 'blog', href: '/blog' },
  { title: 'projects', href: '/projects' },
  { title: 'contact', href: '/contact' },
];

const Header = ({ siteTitle }) => (
  <div className="header">
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <Nav pages={pageConfig} />
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
