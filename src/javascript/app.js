import React from 'react';
import { Router, Route, Link } from 'react-router';

import moment from 'moment';

import { Header, Panel } from './components';

import db from './db'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    return (
      <Panel>
        <Header size="primary">Deadline Radar</Header>
      </Panel>
    );
  }
}

React.render((
  <Router>
    <Route path="/" component={App} />
  </Router>
), document.getElementById("application"));