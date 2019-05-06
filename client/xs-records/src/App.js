import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  /* This is fetches the user from the database automatically */

  /*
  componentDidMount() {
    fetch('/users/5ccda8748575fd03028a2cd7')
    .then(res => res.json())
    .then(data => this.setState({users: data}));
  }
  */


  render() {
    return (
      <div className="App">
     </div>
    );
  }

}

export default App;
