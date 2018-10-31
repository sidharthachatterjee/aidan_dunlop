import React from 'react';
import PropTypes from 'prop-types';
import './background.scss';

const Background = ({ source }) => (
  <div className="background" style={{ backgroundImage: `url(${source})` }} />
);

export default Background;

Background.propTypes = {
  source: PropTypes.string.isRequired,
};
