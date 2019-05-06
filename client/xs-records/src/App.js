import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('/users/5ccda8748575fd03028a2cd7')
    .then(res => res.json())
    .then(data => this.setState({users: data}));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <ul>
         <li key={this.state.users._id}>{this.state.users.username}</li>
        </ul>
      </div>
    );
  }

}

export default App;
