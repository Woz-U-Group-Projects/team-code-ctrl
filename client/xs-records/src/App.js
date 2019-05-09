import React, { Component } from 'react';
<<<<<<< HEAD
import AppNav from './components/nav';
import Routes from './routes';

=======
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import LoginPage from '../src/login';
import Nav from './components/nav';
>>>>>>> 9978d48d0dcd355c6bad0d1b745008a2b1890fe4

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  render() {
    return (
<<<<<<< HEAD
      <main role="main" className="App">
        <AppNav />
        <Routes />
      </main>
      );
=======
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
>>>>>>> 9978d48d0dcd355c6bad0d1b745008a2b1890fe4
  }
}

export default App;
