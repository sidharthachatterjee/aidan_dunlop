import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Posts from '../components/blog/posts';

import Layout from '../components/navigation/defaultLayout';

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <p>
    stuff
    </p>
    <Posts data={edges} />
  </Layout>
);
Blog.propTypes = {
  data: PropTypes.shape({}),
};

Blog.defaultProps = {
  data: {},
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
  }`;
