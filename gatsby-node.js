const path = require('path');

const Promise = require('bluebird');
const axios = require('axios');
const crypto = require('crypto');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blog.js');

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      });
    });
  });
};

exports.sourceNodes = ({ boundActionCreators }, { appId, perPage = 10 }) => {
  const { createNode } = boundActionCreators;
  console.log('$$$$AIDN ', appId, perPage);

  return axios.get('https://api.unsplash.com/photos/random', {
    params: {
      client_id: '0847fd1a8dccfb22f8b77c5e324458ff618dad5a2288a3dcab11143f26706aec',
      query: 'nature',
    },
  }).then((res) => {
    console.log(' HI ', res.data);
    const { id, urls } = res.data;
    const digest = crypto
      .createHash('md5')
      .update(JSON.stringify(res.data))
      .digest('hex');

    const node = {
      id: 'random123123',
      ...urls,
      ...{
        parent: '__SOURCE__',
        children: [],
        internal: {
          type: 'UnsplashPhoto',
          contentDigest: digest,
          mediaType: 'application/json',
        },
      },
    };

    createNode(node);
    return true;
  }).catch((error) => {
    console.log(error);
  });
};
