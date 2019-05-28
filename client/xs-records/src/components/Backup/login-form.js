import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import '../login-form.css'

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: '',
      redirect: false,
      loggedIn: false
    };

  }

  onChange = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit = (event) => {

    event.preventDefault();

    fetch('/users/login', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => this.setState({redirect: data.redirect, loggedIn: data.redirect}))
  }

  renderRedirect = () => {
    if (this.state.redirect || this.state.loggedIn) {
      return <Redirect to="/dashboard" />
    }
  }

  render() {
    return (
      <Container>
        {this.renderRedirect()}
        {/* I kind of like the lowercase "login". Should we keep it? */}
        <h2 className="text-center">login</h2>
        <Row>
          <Col md={{size: 6, offset: 3}}>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="username"></Label>
                <Input onChange={this.onChange} type="text" name="username" id="usernameLog" placeholder="Username" />
              </FormGroup>
              <FormGroup>
                <Label for="password"></Label>
                <Input onChange={this.onChange} type="password" name="password" id="passwordLog" placeholder="Password" />
              </FormGroup>
              <Button type="submit" value="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default LoginForm;
