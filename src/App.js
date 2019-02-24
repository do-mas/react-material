import React, { Component } from 'react';
import Navigation from './app/navigation/Navigation';
import firebase from './firebase';

class App extends Component {
  state = {
    authenticated: false,
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((authorized) => {
      this.setState(() => ({authenticated: authorized}))
    });
  }
  render() {
    return <Navigation authenticated={this.state.authenticated} />;
    // return <Drawer authenticated={this.state.authenticated} />;
  }
}

export default App;
