import React from 'react';

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Text';
    }
    render() {
        return <div>{this.props.children}</div>;
    }
}

export default Text;