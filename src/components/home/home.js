import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import ReactMarkdown from 'react-markdown/with-html';
import './home.scss';
import { Link } from 'gatsby';

const markdownSource = `I'm a Software Developer, currently at [NOW TV](https://nowtv.com).\n
In 2017 I graduated from [The University of Manchester](https://www.cs.manchester.ac.uk/) with a 1st Class BSc in Computer Science.\n
I'm interested in Computer Vision, Medical Imaging, and other useful applications of Artificial Intelligence and Machine Learning. \n
When I'm not staring at a screen, I enjoy climbing, swimming and disco music.\n
Feel free to check out [my CV](/cv) or [email me](mailto:aidandunlop@gmail.com?subject=Hey%20Aidan!).`;

function LinkRenderer({ href, children }) {
  return (
    href.startsWith('/')
      ? <Link to={href}>{children}</Link>
      : <a href={href}>{children}</a>
  );
}

const Home = ({ avatarSource }) => ( // eslint-disable-line
  <div className="home">
    <div className="home_image">
      <Img
        className="avatar"
        fixed={avatarSource}
        style={{ borderRadius: '100%', border: '5px solid white' }}
      />
    </div>
    <ReactMarkdown
      className="home_text"
      renderers={{ link: LinkRenderer }}
      source={markdownSource}
    />
  </div>

);

LinkRenderer.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default Home;
