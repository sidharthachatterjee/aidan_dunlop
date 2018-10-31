const React = require('react');
const Root = require('./src/components/root').default;

exports.wrapRootElement = ({ element }) => (//eslint-disable-line
  <Root element={element} />
);
