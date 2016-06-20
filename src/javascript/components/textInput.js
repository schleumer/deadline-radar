import React from 'react';

import Form from './form';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'TextInput';
  }
  render() {
    // @todo helper
    var label = this.props.label || null;
    var placeholder = this.props.placeholder || label;

    // we love shortcut
    return (
      <Form.Group>
        {label && <label>{label}</label>}
        <input type="text" className="form-control" placeholder={placeholder} />
      </Form.Group>
    );
  }
}

export default TextInput;
