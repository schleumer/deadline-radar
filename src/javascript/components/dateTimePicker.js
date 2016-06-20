import React from 'react';

// you can not require ./ because of recursion
import Form from './form';

import Row from './row';
import Column from './column';
import DatePicker from './datePicker';
import TimePicker from './timePicker';

class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'DateTimePicker';
  }

  render() {
    var label = this.props.label || null;
    var placeholder = this.props.placeholder || label;
    console.log(Form)
    return (
      <Form.Group>
        <label>{label}</label>
        <Row>
          <Column size={Column.from(9, 9, 9, 9)}>
            <DatePicker noFrame={true} />
          </Column>
          <Column size={Column.from(3, 3, 3, 3)}>
            <TimePicker noFrame={true} />
          </Column>
        </Row>
      </Form.Group>
    );
  }
}

export default DateTimePicker;