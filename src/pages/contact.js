import React from 'react';

import Layout from '../components/navigation/defaultLayout';

const Contact = () => (
  <Layout>
    {'You can'}
    <ul>
      <li>
        <a href="mailto:aidandunlop@gmail.com">email me</a>
      </li>
      {/* put contact form in here */}
      <li>
        {'Follow me on '}
        <a href="https://github.com/aidandunlop">Github</a>
      </li>
      <li>
        {'Follow me on '}
        <a href="https://twitter.com/aidandunlop">Twitter</a>
      </li>
      <li>
        {'Connect with me on '}
        <a href="https://linkedin.com/aidandunlop">LinkedIn</a>
      </li>
    </ul>

  </Layout>
);

export default Contact;
