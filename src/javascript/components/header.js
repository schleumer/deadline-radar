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
      case Header.Primary:
        el = <h1>{this.props.children}</h1>;
        break;
      case Header.Secondary:
      default:
        el = <h2>{this.props.children}</h2>
    }
    return el;
  }
}

Header.Primary = "primary";
Header.Secondary = "secondary";

export default Header;