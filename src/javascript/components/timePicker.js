import React from 'react';
import $ from 'jquery';

import Form from './form';

class TimePicker extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'TimePicker';
    }

    componentDidMount() {
      var el = React.findDOMNode(this.refs.inputElement);
      $(el).pickadate({
        today: '',
        clear: 'Clear selection',
        close: 'Cancel'
      })
    }

    componentWillUnmount() {
      var el = React.findDOMNode(this.refs.inputElement);
      var picker = $(el).pickadate('picker');
      picker.stop();
    }

    render() {
      var placeholder = this.props.placeholder || "Pick a date";
      return (
        <Form.Group>
          <label>{this.props.label}</label>
          <input ref="inputElement" className="form-control" placeholder={placeholder} />
        </Form.Group>
      );
    }
}

export default TimePicker;