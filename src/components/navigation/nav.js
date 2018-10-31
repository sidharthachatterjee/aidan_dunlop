import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './nav.scss';

const Nav = ({ pages }) => (
  <div className="nav">
    {pages.map(page => (
      <Link key={page.href} to={page.href} activeClassName="active">
        {page.title}
      </Link>
    ))}
  </div>
);

Nav.propTypes = {
  pages: PropTypes.arrayOf({
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Nav;
