import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PostLink from '../components/postLink';

import Layout from '../components/layout';

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      here is my postz
      <div>{Posts}</div>
    </Layout>
  );
};


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
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }`;
