import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Nav = ({ pages }) => (
  <ul>
    {pages.map(page => (
      <li>
        <Link to={page.href} activeClassName="active">
          {page.title}
        </Link>
      </li>
    ))}
  </ul>
);

Nav.propTypes = {
  pages: PropTypes.arrayOf({
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Nav;
