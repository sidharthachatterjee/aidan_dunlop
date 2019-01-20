import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/navigation/defaultLayout';
import Background from '../components/background/background'; // eslint-disable-line

const NotFoundPage = ({ data: { backgroundImage } }) => (
  <Fragment>
    <Layout backgroundSource={backgroundImage.childImageSharp.fluid}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </Fragment>
);

export default NotFoundPage;


NotFoundPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "background.jpg" }) {
      ...BackgroundImage
    }
  }
`;
