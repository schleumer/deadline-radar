import React from 'react';
import { Router, Route, Link } from 'react-router';

import moment from 'moment';

import { Header, Panel, DateTimePicker, Row, Column, TextInput, DateInterval } from './components';

import db from './db'

import './boot'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.displayName = 'App';
  }

  onChange (ev) {
    console.log(ev)
  }

  render() {
    const columnSize = Column.from(4, 4);

    return (
      <Panel>
        <Header size={Header.Primary}>Deadline Radar</Header>
        <Row>
          <Column size={columnSize}>
            <TextInput ref="projectName" label="Project Name" />
          </Column>
          <Column size={columnSize}>
            <DateTimePicker ref="projectStartDate" label="Start date" onChange={this.onChange} value={this.state.projectStartDate} />
          </Column>
          <Column size={columnSize}>
            <DateTimePicker ref="projectEndDate" label={<span><span className="text-danger">Deadline</span> date</span>} onChange={this.onChange} value={this.state.projectStartDate} />
          </Column>
        </Row>
        <Row>
          <Column size={columnSize}>
            <DateInterval ref="intervalDisplayer" from={this.state.projectStartDate} to={this.state.projectEndDate} />
          </Column>
        </Row>
      </Panel>
    );
  }
}

React.render((
  <Router>
    <Route path="/" component={App} />
  </Router>
), document.getElementById("application"));