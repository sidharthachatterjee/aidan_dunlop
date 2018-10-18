import React from 'react';
import PropTypes from 'prop-types';

import PostLink from './postLink';

import './posts.scss';

const Posts = ({ data }) => {
  const list = data
    .filter(post => !!post.node.frontmatter.date)
    .map(post => <PostLink key={post.node.id} post={post.node} />);

  return (
    <div className="postList">{list}</div>
  );
};


Posts.propTypes = {
  data: PropTypes.shape({}),
};

Posts.defaultProps = {
  data: {},
};

export default Posts;
