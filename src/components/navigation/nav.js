import React from 'react';
import { Link } from 'gatsby';
import './nav.scss';

const pageConfig = [
  { title: 'home', href: '/' },
  { title: 'cv', href: '/cv' },
  { title: 'blog', href: '/blog' },
  { title: 'projects', href: '/projects' },
  { title: 'contact', href: '/contact' },
];

const Nav = () => (
  <div className="nav">
    {pageConfig.map(page => (
      <Link key={page.href} to={page.href} activeClassName="active">
        {page.title}
      </Link>
    ))}
  </div>
);

export default Nav;
