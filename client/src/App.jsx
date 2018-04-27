import { connect } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateNote from './components/CreateNote/';
import AllNotes from './components/AllNotes/';
import Navigation from './components/Navigation/';
import * as actions from './store/actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <br />
          <br />
          <br />
          <Switch>
            <Route path="/create" component={CreateNote} />
            <Route path="/AllNotes" component={AllNotes} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
