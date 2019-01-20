import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const Background = ({ source }) => (
  <Img
    fluid={source}
    style={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      filter: 'brightness(0.5)',
    }}
  />
);

export default Background;

Background.propTypes = {
  source: PropTypes.shape({}).isRequired,
};


export const query = graphql`
  fragment BackgroundImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
      }
    }
  }
`;
