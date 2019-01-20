
// import React from 'react';
// import { graphql } from 'gatsby';
// // import Img from 'gatsby-image';

// import PropTypes from 'prop-types';

// const Root = (props) => {
//   console.log('ass', props);
//   const { element } = props;
//   return (
//     <React.Fragment>
//       {/* <Img
//     fixed={backgroundSource}
//     style={{
//       position: 'absolute',
//       left: 0,
//       top: 0,
//       width: '100%',
//       height: '100%',
//     }}
//   /> */}
//       {element}
//     </React.Fragment>
//   );
// };

// Root.propTypes = {
//   data: PropTypes.shape({}).isRequired,
//   element: PropTypes.shape({}).isRequired,
// };
// export default Root;

// export const query = graphql`
//   query UnsplashQuery{
//     allUnsplashPhoto {
//       edges {
//         node {
//           id
//           user {
//             id
//             name
//           }
//           urls {
//             full
//             regular
//             small
//           }
//           description
//           created_at
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;

// // import React from 'react';
// // import { StaticQuery, graphql } from 'gatsby';
// // import PropTypes from 'prop-types';

// // const Root = ({ data, element }) => {
// //   console.log('ass', data);

// //   return (
// //     <React.Fragment>
// //       {/* <Img
// //     fixed={backgroundSource}
// //     style={{
// //       position: 'absolute',
// //       left: 0,
// //       top: 0,
// //       width: '100%',
// //       height: '100%',
// //     }}
// //   /> */}
// //       {element}
// //     </React.Fragment>
// //   );
// // };
// // export default props => (
// //   <StaticQuery
// //     query={graphql`
// //       query {
// //         allUnsplashPhoto {
// //           edges {
// //             node {
// //               id
// //               user {
// //                 id
// //                 name
// //               }
// //               urls {
// //                 full
// //                 regular
// //                 small
// //               }
// //               description
// //               created_at
// //             }
// //           }
// //         }
// //       }
// //     `}
// //     render={data => <Root data={data} {...props} />}
// //   />
// // );

// // Root.propTypes = {
// //   data: PropTypes.shape({}),
// //   element: PropTypes.shape({}),
// // };

// // Root.defaultProps = {
// //   data: {},
// //   element: {},
// // };
