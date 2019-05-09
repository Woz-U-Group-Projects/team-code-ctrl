import React, { Component } from 'react';
import AppNav from './components/nav';
import Routes from './routes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  render() {
    return (
      <main role="main" className="App">
        <AppNav />
        <Routes />
      </main>
      );
  }
}

export default App;
