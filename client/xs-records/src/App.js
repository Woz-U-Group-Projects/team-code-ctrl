import React, { Component } from 'react';
import AppNav from './components/nav';
import Routes from './routes';
import './index.css';

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
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"></link> 
        <div id="hero-image"></div>      
        <AppNav />
        <Routes />
      </main>
      
      );
  }
}



export default App;

