import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/navigation/defaultLayout';
import Posts from '../components/blog/posts';

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Fragment>
    <Layout>
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
  }`;
