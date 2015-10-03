import React from 'react';
import _ from 'lodash';
import R from 'ramda';
import ColumnBreakpoints from '../helpers/columnBreakpoints'

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Column';
  }
  render() {
    // @todo better coding style
    var classes = [];

    var size = this.props.size;
    
    if(size && (size instanceof ColumnBreakpoints)) {
      classes = classes.concat(size.toArray());
    }

    return <div {...this.props}
      className={classes.join(' ')}
      style={{ ...this.props.style }}>
      {this.props.children}
    </div>;
  }
}


Column.large = size => new ColumnBreakpoints().large(size);
Column.medium = size => new ColumnBreakpoints().medium(size);
Column.small = size => new ColumnBreakpoints().small(size);
Column.extraSmall = size => new ColumnBreakpoints().extraSmall(size);
Column.from = (large = 12, medium = 12, small = 12, extraSmall = 12) => new ColumnBreakpoints(large, medium, small, extraSmall);

export default Column;
