import React from 'react';

import Layout from '../components/navigation/defaultLayout';

const IndexPage = () => (
  <Layout>
    <h1>Who?</h1>
    <p>
      I&apos;m a software developer, currently at
      <a href="https://nowtv.com"> NOW TV</a>
      .
    </p>
    <p>
      I have a 1st class Computer Science degree from the
      <a href="https://www.manchester.ac.uk/"> University of Manchester</a>
      .
    </p>
    <p>
      I&apos;m interested in Machine Learning, Computer Vision and IoT.
    </p>
    <p>Big fan of disco, festivals and live music.</p>
    {/* add spotify playlist link */}
  </Layout>
);

export default IndexPage;
