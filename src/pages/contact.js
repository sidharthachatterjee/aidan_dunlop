import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/navigation/defaultLayout';

const Contact = () => (
  <Layout>
    <h1>Please contact me at:</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Contact;
