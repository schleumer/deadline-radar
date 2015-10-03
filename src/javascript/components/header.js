import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Header';
  }
  render() {
    var size = this.props.size || 'default';
    var el;
    switch(size) {
      case 'primary':
        el = <h1>{this.props.children}</h1>;
      default:
        el = <h2>{this.props.children}</h2>
    }
    return el;
  }
}

export default Header;