import React, { Component } from 'react';


class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  login = (event) => {
    event.preventDefault();
    this.setState({loggedIn: true});
  }

  register = (event) => {
    event.preventDefault();
    this.setState({loggedIn: false});
  }

  render() {
    if ( !this.state.loggedIn ) {
    return (
      <ul className="navbar-nav">
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="username" aria-label="Search" />
          <input className="form-control mr-sm-2" type="password" placeholder="password" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.login}>Login</button>
        </form>
      </ul>
    )

    } else {
      return (
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={this.register}>Register</a>
          </li>
        </ul>
      )
    }
  }
}

export default LoginForm;
