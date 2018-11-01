const React = require('react');
const Root = require('./src/components/root').default;
require('./src/styles/global.scss');

exports.wrapRootElement = ({ element }) => (//eslint-disable-line
  <Root element={element} />
);
