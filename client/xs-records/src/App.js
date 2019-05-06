import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import LoginPage from '../src/login';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  // componentDidMount() {
  //   fetch('/users/5ccda8748575fd03028a2cd7')
  //   .then(res => res.json())
  //   .then(data => this.setState({users: data}));
  // }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <ul>
        <li key={this.state.users._id}>{this.state.users.email}</li>
        </ul>
    <Router>
          <div>
            {/* <Route exact path="/" component={ Home } /> */}
            <Route path="/login" component={ LoginPage } />
          </div>
        </Router>
      </div>
    );
  }

}

export default App;
