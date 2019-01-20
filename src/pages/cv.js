import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/navigation/defaultLayout';

const CV = ({
  data: {
    backgroundImage,
  },
}) => (
  <Fragment>
    <Layout backgroundSource={backgroundImage.childImageSharp.fluid}>
    CV hi
    </Layout>
  </Fragment>
);

export default CV;

CV.propTypes = {
  data: PropTypes.shape({}),
};

CV.defaultProps = {
  data: {},
};

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "background.jpg" }) {
      ...BackgroundImage
    }
  }
`;
