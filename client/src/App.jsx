import { connect } from 'react-redux';
import React, { Component } from 'react';

import CreateNote from './components/CreateNote/';
import Navigation from './components/Navigation/';
import * as actions from './store/actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Navigation />
        <br />
        <br />
        <br />
        <CreateNote />
      </div>
    );
  }
}

export default connect(null, actions)(App);
