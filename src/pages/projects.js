import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Posts from '../components/blog/posts';

import Layout from '../components/navigation/defaultLayout';

const Projects = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
      here&apos;s my projects
    <Posts data={edges} />
  </Layout>
);

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
