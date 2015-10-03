import React from 'react';

import Form from './form';

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'DatePicker';
    }
    render() {
        return <Form.Group>
          <label>{this.props.label}</label>
          <div>Not implemented</div>
        </Form.Group>;
    }
}

export default DatePicker;
