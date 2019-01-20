import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/navigation/defaultLayout';
import Background from '../components/background/background'; // eslint-disable-line

const Contact = ({
  data: {
    backgroundImage,
  },
}) => (
  <Fragment>
    <Layout backgroundSource={backgroundImage.childImageSharp.fluid}>
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
  </Fragment>
);

export default Contact;

Contact.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "background.jpg" }) {
      ...BackgroundImage
    }
  }
`;
