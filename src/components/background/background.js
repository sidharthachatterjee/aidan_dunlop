import React from 'react';
import PropTypes from 'prop-types';
import './background.scss';

const styles = {
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  position: 'fixed',
  left: '0',
  height: '100%',
  right: '0',
  zIndex: -'1',
  filter: 'brightness(0.5)',
};

const Background = ({ source }) => (
  <div style={{ ...styles, ...{ backgroundImage: `url(${source})` } }} />
);

export default Background;

Background.propTypes = {
  source: PropTypes.string.isRequired,
};
