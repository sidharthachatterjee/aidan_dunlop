import React from 'react';
import PropTypes from 'prop-types';

const styles = source => ({
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  position: 'fixed',
  left: '0',
  height: '100%',
  right: '0',
  zIndex: -'1',
  filter: 'brightness(0.5)',
  backgroundImage: `url(${source})`,
});

const Background = ({ source }) => (
  <div style={styles(source)} />
);

export default Background;

Background.propTypes = {
  source: PropTypes.string.isRequired,
};
