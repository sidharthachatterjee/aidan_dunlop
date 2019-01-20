import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/navigation/defaultLayout';
import Home from '../components/home/home';

const IndexPage = ({ data }) => { //eslint-disable-line
  return (
    <Layout>
      <Home avatarSource={data.avatarSource.childImageSharp.fixed} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    avatarSource: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
