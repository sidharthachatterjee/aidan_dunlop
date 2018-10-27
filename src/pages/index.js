import React from 'react';
import { graphql } from 'gatsby';
// import Layout from '../components/navigation/defaultLayout';
import PropTypes from 'prop-types';
import Nav from '../components/navigation/nav';

import './index.scss';

const pageConfig = [
  { title: 'cv', href: '/cv' },
  { title: 'blog', href: '/blog' },
  { title: 'projects', href: '/projects' },
  { title: 'contact', href: '/contact' },
];

const IndexPage = (props) => {
  const { data } = props;
  const { unsplashPhoto } = data;
  console.log(unsplashPhoto);

  return (
    <div>

      <div className="background" />

      <div className="home">
        <img src={unsplashPhoto.small} alt="" />
        <div className="title">
          <h1>Aidan Dunlop.</h1>
        </div>
        <Nav pages={pageConfig} />
      </div>
    </div>
  );
  // <Layout>
  //   <h1>Who?</h1>
  //   <p>
  //     I&apos;m a software developer, currently at
  //     <a href="https://nowtv.com"> NOW TV</a>
  //     .
  //   </p>
  //   <p>
  //     I have a 1st class Computer Science degree from the
  //     <a href="https://www.manchester.ac.uk/"> University of Manchester</a>
  //     .
  //   </p>
  //   <p>
  //     I&apos;m interested in Machine Learning, Computer Vision and IoT.
  //   </p>
  //   <p>Big fan of disco, festivals and live music.</p>
  //   {/* add spotify playlist link */}
  // </Layout>
};


IndexPage.propTypes = {
  data: PropTypes.shape({}),
};

IndexPage.defaultProps = {
  data: {},
};

export default IndexPage;

export const query = graphql`
query Unsplash{
  unsplashPhoto(id: {eq: "random123123"}) {
    raw
    regular
    small
    thumb
  }
}
`;
