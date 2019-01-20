import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Posts from '../components/blog/posts';

import Layout from '../components/navigation/defaultLayout';
import Background from '../components/background/background'; // eslint-disable-line

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
    backgroundImage,
  },
}) => (
  <Fragment>
    <Layout backgroundSource={backgroundImage.childImageSharp.fluid}>
      <p>
    stuff
      </p>
      <Posts data={edges} />
    </Layout>
  </Fragment>
);
Blog.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 40)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
    backgroundImage: file(relativePath: { eq: "background.jpg" }) {
      ...BackgroundImage
    }
  }`;
