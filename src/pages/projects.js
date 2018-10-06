import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PostLink from '../components/postLink';

import Layout from '../components/layout';

const Projects = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // filter by project posts
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      here&apos;s my projects
      <div>{Posts}</div>
    </Layout>
  );
};

Projects.propTypes = {
  data: PropTypes.shape({}),
};

Projects.defaultProps = {
  data: {},
};

export default Projects;

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
