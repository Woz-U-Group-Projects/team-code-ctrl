import React, { Fragment, Component } from 'react';
import { Container, Row, Col, Form, FormText, FormGroup, Label, Input, Button } from 'reactstrap';

class Register extends Component {

  render() {
    return (
      <Fragment>
          <Container fluid>
            <h2 className="text-center"> Register </h2>
              <hr />
            <Row>
              <Col md={{size: 6, offset: 3}}>
                <Form>
                  <FormGroup>
                    <Label for="fname">First Name</Label>
                    <Input type="text" name="fname" id="fname" placeholder="First Name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="lname">Last Name</Label>
                    <Input type="text" name="lname" id="lname" placeholder="Last Name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="usename" placeholder="User Name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password" />
                  </FormGroup>
                  <Button>Submit</Button>
                </Form>
              </Col>
            </Row>
          </Container>
      </Fragment>
    )
  }
}

export default Register;
