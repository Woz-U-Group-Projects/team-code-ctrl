import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      lname: '',
      email: '',
      username: '',
      password: '',
      redirect: false
    }
  }

  onChange = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit = (event) => {

    fetch('/users/register', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => this.setState({redirect: data.message}))
  }

  render() {
    return (
      <Container fluid>
        <h2 className="text-center"> Register </h2>
        <hr />
        <Row>
          <Col md={{size: 6, offset: 3}}>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="fname">First Name</Label>
                <Input onChange={this.onChange} type="text" name="fname" id="fname" placeholder="First Name" />
              </FormGroup>
              <FormGroup>
                <Label for="lname">Last Name</Label>
                <Input onChange={this.onChange} type="text" name="lname" id="lname" placeholder="Last Name" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input onChange={this.onChange} type="email" name="email" id="email" placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input onChange={this.onChange} type="text" name="username" id="usename" placeholder="User Name" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input onChange={this.onChange} type="password" name="password" id="password" placeholder="Password" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      )
}
}

export default Register;
