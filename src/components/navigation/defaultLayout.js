import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import '../../styles/global.scss';
// import Background from '../background/background';

const Layout = ({ children, showHeader }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {/* <Background source={backgroundSource} /> */}
        {showHeader && <Header siteTitle={data.site.siteMetadata.title} />}
        <div className="content">
          {children}
        </div>
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  // backgroundSource: PropTypes.string.isRequired,
  showHeader: PropTypes.bool,
};

Layout.defaultProps = {
  showHeader: true,
};

export default Layout;
