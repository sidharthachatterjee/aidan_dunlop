import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/navigation/defaultLayout';
import Background from '../components/background/background'; // eslint-disable-line

export default function Template({
  data: {
    markdownRemark,
  },
}) {
  const { frontmatter, html } = markdownRemark;
  return (
    <Fragment>
      <Layout>
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }} // eslint-disable-line
            />
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}
Template.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
