const React = require('react');
const Root = require('./src/components/root').default;

console.log(Root);
exports.wrapRootElement = ({ element }) => (//eslint-disable-line
  <Root element={element} />
);
