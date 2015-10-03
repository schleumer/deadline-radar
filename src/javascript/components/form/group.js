import React from 'react';

class Group extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Group';
    }
    render() {
        return <div className="form-group">{this.props.children}</div>;
    }
}

export default Group;
