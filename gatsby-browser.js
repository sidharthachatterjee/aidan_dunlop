import axios from 'axios';
import React from 'react';
import Background from './src/components/background/background';

const fetchBackground = () => axios.get('https://api.unsplash.com/photos/random', {
  params: {
    client_id: '0847fd1a8dccfb22f8b77c5e324458ff618dad5a2288a3dcab11143f26706aec',
    query: 'nature',
    featured: true,
    orientation: 'landscape',
  },
}).then(res => res.data);

export const wrapRootElement = ({ element }) => (//eslint-disable-line
  <Root element={element} />
);

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundSource: '',
    };
  }

  componentDidMount() {
    fetchBackground().then((res) => {
      this.setState({ backgroundSource: res.urls.regular });
    });
  }

  render() {
    const { element } = this.props; // eslint-disable-line
    const { backgroundSource } = this.state;
    return (
      <React.Fragment>
        <Background source={backgroundSource} />
        {element}
      </React.Fragment>
    );
  }
}
