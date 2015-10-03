import React from 'react';
import { Router, Route, Link } from 'react-router';

import moment from 'moment';

import { Header, Panel, TimePicker, Row, Column, TextInput } from './components';

import db from './db'

import './boot'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    const columnSize = Column.from(4, 6);

    return (
      <Panel>
        <Header size={Header.Primary}>Deadline Radar</Header>
        <Row>
          <Column size={columnSize}>
            <TextInput ref="projectName" label="Project Name" />
          </Column>
          <Column size={columnSize}>
            <TimePicker ref="projectStartDate" label="Start date" />
          </Column>
          <Column size={columnSize}>
            <TimePicker ref="projectEndDate" label={<span><span className="text-danger">Deadline</span> date</span>} />
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