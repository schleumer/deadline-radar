import React from 'react';
import $ from 'jquery';

import Form from './form';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'DatePicker';
  }

  componentDidMount() {
    var el = React.findDOMNode(this.refs.inputElement);
    $(el).pickadate({
      clear: 'Clear selection',
      close: 'Cancel',
      onSet: (context) => {
        this.props.onChange && this.props.onChange(context.select || null);
      }
    })
  }

  componentWillUnmount() {
    var el = React.findDOMNode(this.refs.inputElement);
    var picker = $(el).pickatime('picker');
    picker.stop();
  }


  render() {
    var label = this.props.label || null;
    var placeholder = this.props.placeholder || label;

    var frame = (input) => (
      <Form.Group>
        <label>{this.props.label}</label>
        {input}
      </Form.Group>
    );

    var noFrame = (input) => <span>{input}</span>;

    var input = <input ref="inputElement" className="form-control" placeholder={placeholder} />;

    return (this.props.noFrame ? noFrame(input) : frame(input));    
  }
}

export default DatePicker;
