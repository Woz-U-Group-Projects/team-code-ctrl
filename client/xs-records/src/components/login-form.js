import React, { Component,Fragment } from 'react';
import { Container, Row, Col, Form, FormText, FormGroup, Label, Input, Button } from 'reactstrap';

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      data: []
    };


  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const body = JSON.stringify({
      username: data.get('username'),
      password: data.get('password'),
    });

    const headers = {
      'content-type': 'application/json',
      accept: 'application/json'
    }

    if(data.get('username')) {
      await fetch('/users/login', {
        method: 'POST',
        headers,
        body
      })
        .then(res => res.json())
        .then(res => this.setState({loggedIn: res.loggedIn}));
      history.push('/dashboard');
    }
  }

  render() {
    return (

      <Container>
        <h2 className="text-center">Login</h2>
        <Row>
          <Col md={{size: 6, offset: 3}}>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" name="username" id="username" placeholder="Username" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Password" />
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
