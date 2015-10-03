import React from 'react';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Panel';
  }
  render() {
    // TODO stuffs
    return <div>{this.props.children}</div>;
  }
}

export default Panel;
