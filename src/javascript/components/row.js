import React from 'react';
  
class Row extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Row';
  }
  render() {
    // @todo coding style
    
    var className = "row";
    if(this.props.fluid) {
      className = "row-fluid";
    }
    className += ` ${this.props.className}`;

    return <div {...this.props}
      className={className}
      style={{ ...this.props.style }}>
      {this.props.children}
    </div>;
  }
}

export default Row;
