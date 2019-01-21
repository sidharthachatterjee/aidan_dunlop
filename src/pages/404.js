import React, { Fragment } from 'react';
import Layout from '../components/navigation/defaultLayout';
import Background from '../components/background/background'; // eslint-disable-line

const NotFoundPage = () => (
  <Fragment>
    <Layout>
      <h1>Page not found</h1>
      <div style={{
        width: '100%', height: '0', 'padding-bottom': '43%', position: 'relative',
      }}
      >
        <iframe title="404" src="https://giphy.com/embed/3o7aTskHEUdgCQAXde" width="100%" height="100%" style={{ position: 'absolute' }} frameBorder="0" className="giphy-embed" allowFullScreen />
      </div>
      <p><a href="https://giphy.com/gifs/quentin-tarantino-pulp-fiction-vincent-vega-3o7aTskHEUdgCQAXde">via GIPHY</a></p>
    </Layout>
  </Fragment>
);

export default NotFoundPage;
