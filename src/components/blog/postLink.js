import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './postLink.scss';

const PostLink = ({ post }) => (

  <div className="postLink-wrapper">
    <Link to={post.frontmatter.path}>
      <div className="postLink-image">
        {/* <img src="images/uploads/snf.jpg" alt="" /> */}
      </div>
      <div className="postLink-content">
        {post.frontmatter.title}
        {' '}
        <p>
          {post.frontmatter.date}
        </p>
        <p>{post.excerpt}</p>
      </div>
    </Link>
  </div>
);

PostLink.propTypes = {
  post: PropTypes.shape({}),
};

PostLink.defaultProps = {
  post: {},
};

export default PostLink;
